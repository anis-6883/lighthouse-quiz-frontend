import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import Link from 'next/link'
import { FaChevronRight, FaRegBell } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import Logout from '../components/Logout'
import TopNavigation from '../components/TopNavigation'

export const metadata = {
  ...metaObject('Settings'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation icon="" pageName="Settings" share={<IoMdShare className="text-2xl font-medium text-black" />} notification={<FaRegBell className="text-[25px] font-medium " />} />
      </div>
      <div className="overflow-hidden rounded-3xl border-b-[5px] border-b-[#543acc] bg-[#795CFF] bg-[url('/images/Group.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="bg-[url('/images/settingsStar.png')] bg-contain bg-right bg-no-repeat">
          <div className="w-full px-6 pb-8 pt-6">
            <h2 className="mb-8 w-full pr-28 text-lg font-medium text-white sm:text-xl ">Your world is lamp to my feet and a light to my path</h2>
            <span className="rounded-full bg-[#ffffff] p-[11px] text-[13px] font-semibold text-[#6949ff]">Psalms 119:105</span>
          </div>
        </div>
      </div>

      <Link className="w-full" href={routes.user.profile}>
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex items-center justify-center gap-6">
            <img src="/images/setting_personal_info.png" alt="bible quiz image" />
            <span className="text-lg font-medium capitalize sm:text-xl">Personal Info</span>
          </div>
          <FaChevronRight className="text-2xl font-normal" />
        </div>
      </Link>
      <Link className="w-full" href={routes.settings.notification}>
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex items-center justify-center gap-6">
            <img src="/images/setting_notification.png" alt="bible quiz image" />
            <span className="text-lg font-medium capitalize sm:text-xl">Notification</span>
          </div>
          <FaChevronRight className="text-2xl font-normal" />
        </div>
      </Link>
      <Link className="w-full" href={routes.settings.helpCenter}>
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex items-center justify-center gap-6">
            <img src="/images/setting_help_center.png" alt="bible quiz image" />
            <span className="text-lg font-medium capitalize sm:text-xl">help center</span>
          </div>
          <FaChevronRight className="text-2xl font-normal" />
        </div>
      </Link>
      <Logout />
    </>
  )
}
