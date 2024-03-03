import { metaObject } from '@/config/site.config'
import AuthWrapperFour from './auth-wrapper-four'
import SignInForm from './sign-in-form'

export const metadata = {
  ...metaObject('Admin Sign In'),
}

export default async function Page() {
  return (
    <AuthWrapperFour title={<>Welcome Back! Admin Sign in with your credentials.</>} isSignIn>
      <SignInForm />
    </AuthWrapperFour>
  )
}
