'use client';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import Button from '../../components/Button';
import CountryCode from '../../components/CountryCode';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
// import PhoneInput from 'react-phone-input-2';
// import type { PhoneInputProps } from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// export const metadata = {
//   ...metaObject('User Sign-In')
// };

export default function Page() {
  return (
    <main className='bg-[#EBF5FB] '>
      <div className=' m-auto grid min-h-screen max-w-3xl justify-center bg-[#fff]'>
        <div className='mt-7 flex w-full max-w-[540px] flex-col gap-4 overflow-hidden px-6 sm:mt-12 sm:px-12'>
          <div className='mb-4 flex w-full flex-col items-center justify-center gap-4 text-center'>
            <img className='h-40 w-40' src='/images/logo.png' alt='bible quiz logo' />
            <h1 className=' text-3xl font-medium'>Login</h1>
            <p className='text-lg font-normal leading-7'>To login, enter your registered mobile number</p>
          </div>
          <CountryCode placeholder='0846-586335' label=' ' requiredStar=' ' />

          <div className='relative group/phone-number'>
            {/* <PhoneInput
              inputStyle={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              dropdownStyle={{ border: 0 }}
              buttonStyle={{ border: 0, color: 'black', backgroundColor: 'transparent ' }}
              country={'in'}
              containerClass='w-full border-x-0 border-b-2 border-t-0 border-[#6949FF] outline-none'
            /> */}
            <PhoneInput defaultCountry='in' className='w-full' />

            {/* {clearable && <FieldClearButton size={size} onClick={onClear} className={cn(clearIconStyles.base, clearIconStyles.position[size])} />} */}
          </div>

          <div className='flex w-full gap-4 py-3'>
            {/* <label className="label cursor-pointer"> */}
            <input type='checkbox' className='checkbox' />
            <span className='label-text text-lg'>Keep me Logged in</span>
            {/* </label> */}
          </div>
          <Button height={12} title='Login' />
          <div className='w-full p-2 text-base'>
            Don&apos;t have an Account?
            <Link className='text-base font-medium capitalize text-[#781970d6] underline' href='/register'>
              {' '}
              register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
