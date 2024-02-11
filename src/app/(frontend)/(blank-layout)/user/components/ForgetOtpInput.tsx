import {
  useResendOtpMutation,
  useVerifyForgetPasswordOtpMutation,
} from '@/features/auth/authApi';
import { RootState } from '@/features/store';
import { SetStateAction } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { PiSpinnerLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { PinCode } from 'rizzui';

export default function ForgetOtpInput({
  currentTab,
  setCurrentStep,
  setCurrentTab,
}: {
  currentTab: number;
  setCurrentStep: any;
  setCurrentTab: any;
}) {
  const { forgetPhone } = useSelector((state: RootState) => state.authSlice);
  const [otp, setOtp] =
    useState<SetStateAction<string | number | undefined>>('');
  const [otpSubmitting, setOtpSubmitting] = useState(false);
  const [resendOtpSubmitting, setResendOtpSubmitting] = useState(false);
  const [otpValidMsg, setOtpValidMsg] = useState('');

  const [verifyForgetPasswordOtp, { data: responseData, isSuccess, isError }] =
    useVerifyForgetPasswordOtpMutation();

  const [
    resendOtp,
    { data: resendResponse, isSuccess: resendSuccess, isError: resendError },
  ] = useResendOtpMutation();

  // Handle Otp Response
  useEffect(() => {
    if (isError) {
      setOtpSubmitting(false);
      toast.error('Something went wrong! Try Again');
    }

    if (isSuccess) {
      if (!responseData?.status) {
        setOtpSubmitting(false);
        setOtpValidMsg(responseData?.message);
      } else {
        if (responseData?.status) {
          toast.success(responseData?.message);
        } else {
          toast.error(responseData?.message);
        }

        setCurrentStep((prev: number) => prev + 1);
        setCurrentTab((prev: number) => prev + 1);
      }
    }
  }, [isError, isSuccess, responseData, setCurrentStep, setCurrentTab]);

  // Handle Resend Response
  useEffect(() => {
    if (resendError) {
      setResendOtpSubmitting(false);
      toast.error('Something went wrong! Try Again');
    }

    if (resendSuccess) {
      if (!resendResponse?.status) {
        setResendOtpSubmitting(false);
        toast.error(resendResponse?.message);
      } else {
        setResendOtpSubmitting(false);
        toast.success(resendResponse?.message);
      }
    }
  }, [resendError, resendResponse, resendSuccess]);

  // Handler Otp Submit
  const otpSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSubmitting(true);
    setOtpValidMsg('');

    if (typeof otp === 'string') {
      if (otp.length < 6) {
        setOtpSubmitting(false);
        setOtpValidMsg('Please, Enter Valid OTP!');
      } else {
        verifyForgetPasswordOtp({
          phone: forgetPhone,
          otp,
        });
      }
    } else {
      setOtpValidMsg('Please, Enter Valid OTP!');
    }
  };

  // Handle Resend Otp Submit
  const handleResendOtp = () => {
    setResendOtpSubmitting(true);

    resendOtp({
      phone: forgetPhone,
      context: 'forget_code',
    });
  };

  return (
    <div className={`card-body ${currentTab === 1 ? '' : 'hidden'}`}>
      <h2 className="mb-5 text-center text-xl font-semibold">Verify OTP</h2>

      <div className="label mb-4">
        <span className="text-sm font-semibold text-white">
          We sent an OTP to your phone (+{forgetPhone}). You have 2 minutes to
          complete this verification. Thank you!
        </span>
      </div>
      <form onSubmit={otpSubmitHandler}>
        <div>
          <PinCode length={6} setValue={(input) => setOtp(input)} />
        </div>
        {otpValidMsg && (
          <p className="mt-4 px-1 text-center font-medium text-error">
            {otpValidMsg}
          </p>
        )}
        <div className="mt-10 grid grid-cols-12 items-center">
          <div className="col-span-8">
            <p className="flex select-none items-center">
              Didn{"'"}t get any otp yet?{' '}
              <span
                className={`${
                  resendOtpSubmitting && 'pointer-events-none'
                } ml-1 cursor-pointer font-semibold text-primary`}
                onClick={handleResendOtp}
              >
                Resend OTP
              </span>
              {resendOtpSubmitting && (
                <PiSpinnerLight size={20} className="ml-1 animate-spin" />
              )}
            </p>
          </div>
        </div>
        <div className="card-actions mt-5 justify-end">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={otpSubmitting}
          >
            Next
            {otpSubmitting && (
              <PiSpinnerLight className="animate-spin text-base" />
            )}
          </button>
        </div>
      </form>
      <div className="mt-5 flex select-none items-center justify-center">
        <Link
          href="/"
          className="flex items-center transition-all duration-150 ease-in hover:text-primary"
        >
          <HiOutlineArrowSmLeft className="mr-3 text-xl" /> Go to Home
        </Link>
      </div>
    </div>
  );
}
