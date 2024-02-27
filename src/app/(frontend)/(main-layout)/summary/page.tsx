import { metaObject } from '@/config/site.config'
import { FaArrowLeft, FaFlagCheckered, FaRegBell } from 'react-icons/fa6'
import HistoryCard from '../components/HistoryCard'
import TopNavigation from '../components/TopNavigation'
import TopRanking from '../components/TopRanking'

export const metadata = {
  ...metaObject('User Summary'),
}

export default function Page() {
  return (
    <>
      <div className="w-full pb-6 ">
        <TopNavigation icon={<FaArrowLeft className="text-2xl" />} pageName="" notification={<FaRegBell className="text-3xl font-medium" />} />
      </div>
      <div className="mb-3 flex flex-col gap-6">
        <HistoryCard
          quizName="daily quiz"
          title="Today English Daily Quiz 01 date open"
          //   ImageSrc="/images/Daily_Quiz.png"
          date=" 2/3/2024"
          questionType="daily"
        />
        <TopRanking />
        <div className="flex flex-col gap-6 px-6 sm:px-0">
          <div className="h-16 rounded-xl bg-gradient-to-r from-[#4f2e83] to-[#92296f]">
            <div className="flex h-full w-full items-center justify-between px-4">
              <div className="flex items-center gap-5">
                {/* <span className="rounded bg-white p-2">
                  <FaUser className="text-[#a92668] " />
                </span> */}
                <img className="pl-3" src="/images/summary/user.png" alt="user icon" />
                <span className="font-medium text-white">Rank</span>
              </div>
              <div className="">
                <span className="font-medium text-white">68/103</span>
              </div>
            </div>
          </div>

          <div className="h-16 rounded-xl bg-gradient-to-r from-[#4f2e83] to-[#92296f]">
            <div className="flex h-full w-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <span className="rounded bg-white p-2">
                  <FaFlagCheckered className="text-[#a92668] " />
                </span>
                <span className="font-medium text-white">Score</span>
              </div>
              <div className="">
                <span className="font-medium text-white">1970</span>
              </div>
            </div>
          </div>

          <div className="h-16 rounded-xl bg-gradient-to-r from-[#4f2e83] to-[#92296f]">
            <div className="flex h-full w-full items-center justify-between px-4">
              <div className="flex items-center gap-4 ">
                <span className="font-medium text-white">Accuracy</span>
              </div>
              <div className=" w-3/5">
                {/* <input type="progress" min={0} max="100" value="80" className="progress progress-warning h-4 bg-[#c3b6ff]" />
              <span className="absolute -top-2 left-80 mr-3 rounded-full bg-white p-1 text-black">70%</span> */}

                <div className="h-4 w-full rounded-full bg-[#fff]">
                  <div className="relative h-full w-[50%] rounded-full bg-[#c3b6ff] text-center text-xs text-white">
                    <span className="absolute -top-1 right-[0%] z-10 rounded-full bg-white p-[5px] font-medium text-black">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="pb-6 pt-2 text-center text-xl font-semibold capitalize sm:text-3xl">Performance</h2>
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <div>
              <div className=" mb-3 w-full max-w-[65px] rounded-md bg-[#92296f] p-[10px] text-center font-semibold text-white">0</div>
              <p className="text-xs font-bold uppercase sm:text-[13px]">CORRECT</p>
            </div>
            <div>
              <div className=" mb-3 w-full max-w-16 rounded-md bg-[#92296f] p-[10px] text-center font-semibold text-white">1</div>
              <p className="text-xs font-bold uppercase sm:text-[13px]">INCORRECT</p>
            </div>
            <div>
              <div className=" mb-3 w-full max-w-16 rounded-md bg-[#92296f] p-[10px] text-center font-semibold text-white">17s</div>
              <p className="text-xs font-bold uppercase sm:text-[13px]">AVG TIME/Q</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
