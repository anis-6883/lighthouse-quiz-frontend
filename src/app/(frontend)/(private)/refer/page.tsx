import { metaObject } from '@/config/site.config'
import { FaRegBell } from 'react-icons/fa6'
import ReferModal from '../components/ReferModal'
import TopNavigation from '../components/TopNavigation'

export const metadata = {
  ...metaObject('Refer'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation icon="" pageName="Refer" notification={<FaRegBell className="text-[25px] font-medium" />} />
      </div>

      <ReferModal />
    </>
  )
}
