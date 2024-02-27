import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import AuthWrapperFour from './auth-wrapper-four'
import SignInForm from './sign-in-form'

export const metadata = {
  ...metaObject('Admin Sign In'),
}

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    if (session?.user?.role === 'admin') {
      redirect(routes.dashboard)
    } else {
      redirect(routes.home)
    }
  }

  return (
    <AuthWrapperFour title={<>Welcome Back! Admin Sign in with your credentials.</>} isSignIn>
      <SignInForm />
    </AuthWrapperFour>
  )
}
