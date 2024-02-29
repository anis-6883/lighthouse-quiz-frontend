import { metaObject } from '@/config/site.config'
import { IoMdMusicalNote } from 'react-icons/io'
import Button from '../../components/Button'
import CheckboxCard from './components/CheckboxCard'
import McqCard from './components/McqCard'
import OpenendedCard from './components/OpenendedCard'
import QuestionCard from './components/QuestionCard'

export const metadata = {
  ...metaObject('Daily Quiz'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="relative m-auto min-h-screen max-w-3xl overflow-hidden bg-[var(--front-bg-color)] px-6 pb-20 pt-6 sm:px-8">
        {/* top navbar */}
        <div className="w-full">
          <ul className="flex items-center justify-between bg-[#fff] font-medium ">
            <li>
              <h2 className="flex items-center gap-2 text-2xl font-semibold capitalize text-[var(--text-color)]">1/1</h2>
            </li>
            <button type="button">
              <IoMdMusicalNote className="text-2xl font-semibold sm:text-4xl" />
            </button>

            {/* <MdMusicOff className="text-2xl font-semibold sm:text-4xl" /> */}
          </ul>
          <div className="pb-4 pt-3">
            <div className="h-4 w-full rounded-full bg-gray-300">
              <div className="h-full w-3/4 rounded-full bg-green-600 pr-2 text-end text-xs text-white">75%</div>
            </div>
          </div>

          <QuestionCard
            question="சுயபுத்தியை விட கர்த்தரை நம்பும்படி
    அறிவுறுத்துகிறது?"
            imageSrc="/images/Live_Quiz.png"
          />

          <div className="pt-6">
            <McqCard bg_color="bg-[var(--ans-option-one)]" option_text="hello bangladesh" imageSrc="/images/Live_Quiz.png" />

            <CheckboxCard bg_color="bg-[var(--ans-option-two)]" option_text="Open Hello Bangladesh" />

            <OpenendedCard />
          </div>
          <br />
          <Button type="submit" height={16} title="submit answer" />
        </div>
      </div>
    </main>
  )
}
