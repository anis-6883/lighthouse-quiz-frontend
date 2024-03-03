import withAuth from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { routes } from './config/routes'

export default withAuth(
  function middleware(req) {
    const userRole = req.nextauth.token?.role

    if (userRole === 'user' && req.nextUrl.pathname.includes('admin')) {
      return NextResponse.redirect(new URL('/', req.url))
    } else {
      return NextResponse.next()
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => token?.role === 'user' || token?.role === 'admin', // If there is a token, the user is authenticated
    },
    pages: {
      signIn: routes.signIn,
      error: routes.signIn,
    },
  },
)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|icons|favicon.ico|register|signin|home|quiz|countdown|end-quiz|leaderboard|quiz-end-leaderboard|end-score-screen|history|prayer-request|daily-word|refer|settings|summary|waiting-area|about-us|terms-and-conditions|privacy-policy|verification|signup|user|question|test|admin/login|$).*)',
  ],
}
