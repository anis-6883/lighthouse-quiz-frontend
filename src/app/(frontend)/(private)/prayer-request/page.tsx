import { metaObject } from '@/config/site.config'
import { FaArrowLeft, FaRegBell } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'

import TopNavigation from '../components/TopNavigation'
import PrayerReqForm from './components/PrayerReqForm'
export const metadata = {
  ...metaObject('Prayer Request'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-2">
        <TopNavigation icon={<FaArrowLeft className="text-2xl" />} pageName="Prayer Request" share={<IoMdShare className="text-2xl font-medium text-black" />} notification={<FaRegBell className="text-[25px] font-medium " />} />
      </div>

      <div>
        <PrayerReqForm />

        <div className="flex w-full justify-center">
          <img className="mt-5 h-full max-h-[320px] w-full max-w-[390px] rounded-xl object-cover" src="images/prayer.png" alt="" />
        </div>
      </div>
    </>
  )
}
