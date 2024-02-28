// 'use client'
import { metaObject } from '@/config/site.config'
import Link from 'next/link'
import 'react-international-phone/style.css'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import InputPhone from '../../components/InputPhone'
// import { PhoneNumber } from '../user/components/PhoneNumber'
// import PhoneInput from 'react-phone-input-2';
// import type { PhoneInputProps } from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

export const metadata = {
  ...metaObject('User Sign-In'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB] ">
      <div className=" m-auto grid min-h-screen max-w-3xl justify-center bg-[#fff]">
        <div className="mt-7 flex w-full max-w-[540px] flex-col gap-4 overflow-hidden px-6 sm:mt-12 sm:px-12">
          <div className="mb-4 flex w-full flex-col items-center justify-center gap-4 text-center">
            <img className="h-40 w-40" src="/images/logo.png" alt="bible quiz logo" />

            <h1 className=" text-3xl font-medium">Login</h1>
            <p className="text-lg font-normal leading-7">Enter registered number for OTP to login.</p>
          </div>

          <InputPhone />

          <div className="pb-b flex w-full items-center gap-3 py-4 ">
            <Checkbox />
            <span className="label-text text-lg">Keep me Logged in</span>
          </div>

          <Button type="submit" height={12} title="Login" />
          <div className="w-full p-2 text-base">
            Don&apos;t have an Account?
            <Link className="text-base font-medium capitalize text-[#781970d6] underline ml-2" href="/register">
              register
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
