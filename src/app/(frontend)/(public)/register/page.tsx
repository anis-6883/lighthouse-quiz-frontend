import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import Link from 'next/link'

import { Formik } from 'formik'
import Form from './Form'

export const metadata = {
  ...metaObject('User Register'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto grid min-h-screen max-w-3xl place-items-center bg-[#ffffff]">
        <div className="my-6 flex w-full flex-col items-center justify-center gap-3 overflow-hidden px-4 sm:max-w-[640px] sm:px-12">
          <div className="mt-2 flex flex-col items-center justify-center gap-4 px-12 text-center">
            <progress className="progress progress-primary h-4 w-56 bg-slate-200" value="70" max="100"></progress>
            <h1 className="text-xl font-medium sm:text-2xl">Create an account ✏️</h1>
            <p className="text-lg ">Please complete your profile to participate in the Quiz!</p>
          </div>

          <Form />

          <div className="w-full p-2 text-base">
            Already have an account?{' '}
            <Link className="text-base font-medium capitalize text-[#781970d6] underline" href={routes.signIn}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
