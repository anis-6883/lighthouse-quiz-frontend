import TopNavigation from '@/app/(frontend)/(private)/components/TopNavigation'
import Button from '@/app/(frontend)/components/Button'
import InputPhone from '@/app/(frontend)/components/InputPhone'
import ProfileImage from '@/app/(frontend)/components/ProfileImage'
import SelectOption from '@/app/(frontend)/components/SelectOption'
import TextInput from '@/app/(frontend)/components/TextInput'
import { metaObject } from '@/config/site.config'
import { FaArrowLeft } from 'react-icons/fa6'

export const metadata = {
  ...metaObject('Settings - Notifications'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB] ">
      <div className="relative m-auto min-h-screen w-full max-w-3xl overflow-hidden bg-[#fff] px-4 pb-5 pt-4 sm:px-8">
        <div className="w-full pb-5 pt-4">
          <TopNavigation icon={<FaArrowLeft className="text-2xl" />} pageName="Personal Info" notification="" />
        </div>

        <ProfileImage name="John" ImageSrc="" />

        <div className="flex w-full flex-col items-center justify-center gap-3 px-4">
          <hr className="my-2 h-[1.5px] w-full bg-[#e0e0e0] " />
          <TextInput type="text" label="Your Name" name="name" placeholder="Ex.John Doe" requiredStar="*" />

          <div className="w-full py-3">
            <InputPhone title="Phone Number" />
          </div>

          <SelectOption label="Country" name="country" placeholder="select country" />

          <div className="w-full border-b-2  border-[var(--primary-color)] outline-none">
            <label htmlFor="language" className="text-base font-bold capitalize ">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 px-2 pb-5 pt-3">
              <div className="flex items-center gap-3">
                <input type="radio" name="gender" className="radio-primary radio-xs" />
                <span className="text-base capitalize">Male</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="gender" className="radio-primary radio-xs" />
                <span className="text-base capitalize">Female</span>
              </div>
            </div>
          </div>
          {/* select language input */}

          <div className="w-full border-b-2  border-[var(--primary-color)] outline-none">
            <label htmlFor="language" className="text-base font-bold capitalize ">
              Language <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 px-2 pb-5 pt-3">
              <div className="flex items-center gap-3">
                <input type="radio" name="radio-2" className="radio-primary radio-xs" />
                <span className="text-base capitalize">English</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="radio-2" className="radio-primary radio-xs" />
                <span className="text-base capitalize">Tamil</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="radio-2" className="radio-primary radio-xs" />
                <span className="text-base capitalize">Both</span>
              </div>
            </div>
          </div>

          <TextInput type="number" label="Age" name="age" placeholder="Ex.12" requiredStar="*" />

          <TextInput type="email" label="Email" name="email" placeholder="email@example.com" requiredStar=" " />

          <TextInput type="text" label="Church you Attend" name="Church" placeholder="" requiredStar=" " />
          <br />
          <Button type="button" height={12} title="save" />
        </div>
      </div>
    </main>
  )
}
