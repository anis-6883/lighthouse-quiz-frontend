import { metaObject } from '@/config/site.config'
import { FaClock, FaRegBell } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { PiShare } from 'react-icons/pi'
import TopNavigation from '../components/TopNavigation'
export const metadata = {
  ...metaObject('Daily Word'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-1">
        <TopNavigation
          pageName="Daily Word (10 Feb 2024)"
          share={<IoMdShare className="text-2xl font-medium text-black" />}
          notification={<FaRegBell className="text-[25px] font-medium " />}
        />
      </div>

      <div className="mb-4 mt-4 w-full">
        <div className="flex w-full gap-4">
          <button className="w-full rounded-full border-2 border-[var(--primary-color)] bg-[var(--primary-color)] py-[4px] text-lg text-white sm:py-[6px]">
            Tamil
          </button>
          <button className="w-full rounded-full border-2 border-[var(--primary-color)]  py-[4px] text-lg text-black sm:py-[6px]">English</button>
        </div>
        <div>
          <div className="mb-3 mt-6 flex w-full justify-between gap-2">
            <p className="text-xl font-semibold sm:text-2xl">Verse of the Day</p>
            <span className="flex items-center gap-3 text-lg font-semibold text-[#8B2CF5]">
              <FaClock className="" />
              5:00 AM
              <PiShare className="text-[24px]" />
            </span>
          </div>
          {/* border-[#5E17EB] */}
          {/* <div className="relative h-[220px] w-full rounded-3xl border-b-[8px] border-r-[8px] border-[#5E17EB] bg-[#FAEBFF]">
            <ImQuotesLeft className="absolute left-2 top-1 text-2xl" />
            <ImQuotesRight className="absolute bottom-1 right-2 text-2xl" />
          </div> */}

          <div className="relative w-full text-center">
            <img className="h-full w-full object-contain" src="/images/speechBible.png" alt="" />
          </div>

          <div className="mb-4 flex w-full justify-between pt-6">
            <p className="text-xl font-semibold sm:text-2xl"> Daily Manna</p>
            <PiShare className="text-[24px] text-[#8B2CF5]" />
          </div>
        </div>
        <div
          style={{ clipPath: 'polygon(0% 0%, 13% 9%, 94% 9%, 98% 10%, 100% 13%, 100% 100%, 0 100%)' }}
          className="h-[400px] w-full rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-[4.8rem] border-b-[3px] border-l-2 border-b-[#00000011] border-l-[#00000011] bg-[#FAEBFF] p-4  "
        ></div>
      </div>
    </>
  )
}
