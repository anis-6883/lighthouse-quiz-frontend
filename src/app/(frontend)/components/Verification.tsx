import { metaObject } from '@/config/site.config'
import postData from '@/utils/fetch/postData'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Countdown from 'react-countdown'
import toast from 'react-hot-toast'
import { PinCode } from 'rizzui'
import Button from './Button'
import { routes } from '@/config/routes'

export const metadata = {
  ...metaObject('Verification OTP'),
}

export default function Verification({ token }: { token: string }) {
  const [timer, setTimer] = useState(Date.now() + 60 * 1000)
  const [OTP, setOTP] = useState('')
  const router = useRouter()

  const handleOTP = async () => {
    const response = await postData('register/verification', token, { otp: OTP })
    console.log(response)

    if (response.status) {
      signIn('credentials', {
        userId: response.data._id,
        accessToken: response.data.accessToken,
        role: 'user',
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error)
        } else if (callback?.ok) {
          toast.success('Welcome!')
          router.push(routes.appHome)
        }
      })
    } else {
      toast.error(response.message)
    }
  }

  const renderTimer = ({ seconds, completed }: { seconds: number; completed: boolean }) => {
    if (completed) {
      return (
        <div className="flex w-full justify-center text-base">
          <span
            role="button"
            className="text-nowrap text-base font-medium capitalize text-[#781970d6] underline sm:text-lg"
            onClick={() => setTimer(Date.now() + 60 * 1000)}
          >
            Resend OTP
          </span>
        </div>
      )
    } else {
      return (
        <p className="text-[18px]">
          <span>You can resend code in</span>
          <span className="ml-1 text-primary">{seconds} seconds</span>
        </p>
      )
    }
  }

  return (
    <main className="bg-[#EBF5FB] ">
      <div className=" m-auto grid  max-w-3xl justify-center bg-[#ffffff] bg-[url('/images/background_star.png')] bg-cover">
        <div className="mt-7 flex w-full max-w-[640px] flex-col gap-4 overflow-hidden px-6 sm:mt-6 sm:px-20">
          <div className="my-4 flex w-full flex-col items-center justify-center gap-5 text-center">
            <h1 className=" text-3xl font-medium">You have got an OTP 📩</h1>
            <p className="text-[18px] font-normal leading-7">
              OTP verification code sent via SMS
              <br />
              Enter code to proceed
            </p>
          </div>

          <PinCode type="number" length={6} size="xl" inputClassName="text-3xl font-bold" setValue={(code: any) => setOTP(code)} />

          <div className="w-full py-3 text-center">
            <p className="pb-3 text-[18px]">Didn&apos;t receive OTP?</p>
            <Countdown key={timer} date={timer} renderer={renderTimer} />
          </div>

          <Button type="submit" height={12} title="confirm" onClick={handleOTP} disabled={OTP.length !== 6} />
        </div>
      </div>
    </main>
  )
}
