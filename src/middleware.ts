import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const { token }: any = req.nextauth

    if (token && token.accessToken && token.role) {
      if (token.role === 'admin') {
        if (pathname.startsWith('/auth') || pathname.startsWith('/app') || pathname === '/admin/login' || pathname === '/')
          return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      } else if (token.role === 'user') {
        if (pathname.startsWith('/admin') || pathname.startsWith('/auth') || pathname === '/') return NextResponse.redirect(new URL('/app', req.url))
      }
    } else {
      if (pathname.startsWith('/admin') && pathname !== '/admin/login') return NextResponse.redirect(new URL('/admin/login', req.url))
      else if (pathname.startsWith('/app')) return NextResponse.redirect(new URL('/auth/login', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  },
)

export const config = {
  matcher: ['/app/:path*', '/auth/:path*', '/admin/:path*', '/'],
}
