import { metaObject } from '@/config/site.config'

import { FaArrowLeft, FaRegBell } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import HistoryTab from '../components/HistoryTab'
import TopNavigation from '../components/TopNavigation'
export const metadata = {
  ...metaObject('Settings - Help Center'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation icon={<FaArrowLeft className="text-2xl" />} pageName="history" share={<IoMdShare className="text-2xl font-medium text-black" />} notification={<FaRegBell className="text-[25px] font-medium " />} />
      </div>

      <HistoryTab />
    </>
  )
}
