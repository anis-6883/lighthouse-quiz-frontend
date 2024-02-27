'use client'
import { LuArrowDownUp } from 'react-icons/lu'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import HistoryCard from './HistoryCard'

export default function HistoryTab() {
  return (
    <div className="my-4">
      <Tabs>
        <TabList className="grid w-full grid-cols-2 text-center ">
          <Tab className="cursor-pointer border-b-[3px] p-5 text-base font-semibold text-[#9e9e9e] sm:text-lg">Daily Quiz</Tab>
          <Tab className="cursor-pointer border-b-[3px] p-5 text-base font-semibold text-[#9e9e9e] sm:text-lg">Live Quiz</Tab>
        </TabList>

        <TabPanel>
          <div className="flex items-center justify-between py-6 text-lg font-semibold">
            <h6>2 Quizzes</h6>
            <button type="button" className="flex  items-center gap-2 text-[var(--primary-color)]">
              <span>Newest</span>
              {/* <span>Oldest</span> */}
              <LuArrowDownUp />
            </button>
          </div>
          <div>
            <HistoryCard title="Today English Daily Quiz 01 date open" ImageSrc="/images/home_popup_img.jpg" date="2 hours ago " questionType="daily" />

            <HistoryCard
              title="இன்றைய வினாடி வினா (01 Feb’24) இன்றைய வினாடி வினா (01 Feb’24)"
              //   ImageSrc="/images/Daily_Quiz.png"
              date="2 hours ago "
              questionType="daily"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center justify-between py-6 text-lg font-semibold">
            <h6>1 Quizzes</h6>
            <button type="button" className="flex  items-center gap-2 text-[var(--primary-color)]">
              {/* <span>Newest</span> */}
              <span>Oldest</span>
              <LuArrowDownUp />
            </button>
          </div>
          <HistoryCard
            title="Today English Live Quiz"
            // quizName=""
            date="2 hours ago "
            // ImageSrc="/images/Live_Quiz.png"
            questionType="live"
          />
        </TabPanel>
      </Tabs>
    </div>
  )
}
