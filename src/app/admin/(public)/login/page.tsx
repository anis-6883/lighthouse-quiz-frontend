import { metaObject } from '@/config/site.config'
import AdminLoginForm from '../components/AdminLoginForm'

export const metadata = {
  ...metaObject('Admin Sign In'),
}

// export default async function Page() {
//   return (
//     <AuthWrapperFour title={<>Welcome Back! Admin Sign in with your credentials.</>} isSignIn>
//       <SignInForm />
//     </AuthWrapperFour>
//   )
// }
export default async function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#061626] p-5 text-white md:p-0">
      <div className="w-[600px] rounded-md bg-[#1C2632] p-5 shadow-xl md:p-10">
        <div className="p-2">
          <img src="/images/logo.png" className="m-auto w-40" alt="logo" />
          <h2 className="mb-5 text-center text-lg font-semibold">Admin Login</h2>
          <AdminLoginForm />
        </div>
      </div>
    </section>
  )
}
