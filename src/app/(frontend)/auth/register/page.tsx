import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import Link from 'next/link'
import SignUp from './SignUp'

export const metadata = {
  ...metaObject('User Register'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto grid min-h-screen max-w-3xl place-items-center bg-[#ffffff]">
        <div className="my-6 flex w-full flex-col items-center justify-center gap-3 overflow-hidden px-4 sm:max-w-[640px] sm:px-12">
          <SignUp />

          <div className="w-full p-2 text-center text-base">
            Already have an account?
            <Link className="ml-1 text-base font-medium capitalize text-[#781970d6] underline" href={routes.signIn}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
