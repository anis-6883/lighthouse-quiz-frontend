import { metaObject } from '@/config/site.config'

import getData from '@/utils/fetch/getData'
import { FaArrowLeft, FaRegBell } from 'react-icons/fa6'
import HelpCenterTab from '../../components/HelpCenterTab'
import TopNavigation from '../../components/TopNavigation'

export const metadata = {
  ...metaObject('Settings - Help Center'),
}

export default async function Page() {
  const faq = await getData('faq')

  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation icon={<FaArrowLeft className="text-2xl" />} pageName="help center" notification={<FaRegBell className="text-[25px] font-medium" />} />
      </div>

      <HelpCenterTab faq={faq} />
    </>
  )
}
