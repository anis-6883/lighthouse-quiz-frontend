import { metaObject } from '@/config/site.config'
//import CheckboxAnswer from './components/CheckboxAnswear'
import FillInTheBlank from './components/FillInTheBlank'
//import MCQanswer from './components/MCQanswer'
import { FaBold, FaFont, FaItalic, FaStrikethrough, FaUnderline } from 'react-icons/fa'
import { TbSubscript, TbSuperscript } from 'react-icons/tb'
import Question from './components/Question'
//import TrueFalse from './components/TrueFalse'
export const metadata = {
  ...metaObject('question'),
}

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl">
      <div className="bg-white py-4 ">
        <div className="flex items-center gap-8 text-sm font-bold">
          <FaFont />
          <FaBold />
          <FaItalic />
          <FaUnderline />
          <FaStrikethrough />
          <TbSuperscript className="text-[23px] font-bold hover:bg-red-300" />
          <TbSubscript className="text-[23px] font-bold hover:bg-red-300" />
        </div>
      </div>
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
