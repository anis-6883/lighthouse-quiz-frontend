import { metaObject } from '@/config/site.config'
import 'react-international-phone/style.css'
import LoginForm from './LoginForm'

export const metadata = {
  ...metaObject('Login'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB] ">
      <div className=" m-auto grid min-h-screen max-w-3xl justify-center bg-[#fff]">
        <div className="mt-7 flex w-full max-w-[540px] flex-col gap-4 overflow-hidden px-6 sm:mt-12 sm:px-12">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
