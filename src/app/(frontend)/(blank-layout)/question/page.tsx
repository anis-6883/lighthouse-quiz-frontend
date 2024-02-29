import { metaObject } from '@/config/site.config'
//import CheckboxAnswer from './components/CheckboxAnswear'
import FillInTheBlank from './components/FillInTheBlank'
//import MCQanswer from './components/MCQanswer'
import Question from './components/Question'
//import TrueFalse from './components/TrueFalse'
export const metadata = {
  ...metaObject('question'),
}

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl">
      <div className="overflow-hidden rounded-xl bg-[#461A42] p-6">
        <Question />
        <div className="w-full">
          {/* <MCQanswer />
          <CheckboxAnswer />
          <TrueFalse /> */}
          <FillInTheBlank />
        </div>
      </div>
    </main>
  )
}
