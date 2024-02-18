import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import Button from '../../../components/Button';

export const metadata = {
  ...metaObject('Verification OTP'),
};

export default function Page() {
  return (
    <main className="bg-[#EBF5FB] ">
      <div className=" m-auto grid min-h-screen max-w-3xl justify-center bg-[#ffffff] bg-[url('/images/background_star.png')] bg-cover">
        <div className="mt-7 flex w-full max-w-[640px] flex-col gap-4 overflow-hidden px-6 sm:mt-6 sm:px-20">
          <div className="my-4 flex w-full flex-col items-center justify-center gap-5 text-center">
            <h1 className=" text-3xl font-medium">You’ve got an OTP 📩</h1>
            <p className="text-[18px] font-normal leading-7">
              We have sent the OTP verification code to your mobile number.
              Check your SMS and enter the code below.
            </p>
          </div>
          <div className="w-full py-3 text-center">
            <p className="pb-4 text-[18px]">Didn{"'"}t receive otp?</p>
            <p className="text-[18px]">
              You can resend code in <span className="text-[#2C6EFD]"> 0 </span>{' '}
              s
            </p>
          </div>
          <Button height={12} title="confirm" />
          <div className="flex w-full justify-between text-base">
            <span className="p-3">
              Already have an account?{' '}
              <Link
                className="text-nowrap text-base font-medium capitalize text-[#781970d6] underline sm:text-lg"
                href={routes.signIn}
              >
                {' '}
                sing in
              </Link>
            </span>

            <span className="text-nowrap p-3 text-base font-medium capitalize text-[#781970d6] underline sm:text-lg">
              resend OTP
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
