import { metaObject } from '@/config/site.config'
import { FaClock, FaRegBell } from 'react-icons/fa6'
import { IoMdShare } from 'react-icons/io'
import { PiShare } from 'react-icons/pi'
import TopNavigation from '../../app/components/TopNavigation'

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

      <div className="mt-4 w-full">
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

          <div className="relative w-full text-center">
            <img className="h-full w-full object-contain" src="/images/speechBible.png" alt="" />
            <span className="absolute bottom-7 left-6 right-[26px] top-6 flex items-center justify-center overflow-hidden text-base leading-6 tracking-wider text-black sm:left-7 sm:right-10 sm:text-xl sm:leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellat enim eum, ad quos autem obcaecati voluptatum soluta maiores
              optio commodi cupiditate ducimus quae officia, at ratione impedit.
            </span>
          </div>

          <div className="mb-4 flex w-full justify-between pt-6">
            <p className="text-xl font-semibold sm:text-2xl"> Daily Manna</p>
            <PiShare className="text-[24px] text-[#8B2CF5]" />
          </div>
        </div>
        <div
          style={{ clipPath: 'polygon(0% 0%, 13% 9%, 94% 9%, 98% 10%, 100% 13%, 100% 100%, 0 100%)' }}
          className="flex h-[400px] w-full items-center rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-[4.8rem] border-b-[3px] border-l-2 border-b-[#00000011] border-l-[#00000011] bg-[#FAEBFF] px-2 pb-4 pt-12 sm:px-4"
        >
          <span className="text-center text-base leading-[28px] tracking-wider text-black sm:left-7 sm:right-10 sm:text-xl sm:leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellat enim eum, ad quos autem obcaecati voluptatum soluta maiores
            optio commodi cupiditate ducimus quae officia, at ratione impedit voluptates dolores.
          </span>
        </div>
      </div>
    </>
  )
}
