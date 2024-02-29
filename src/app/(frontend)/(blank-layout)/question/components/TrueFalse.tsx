import { FaRegImage } from 'react-icons/fa6'
import { Checkbox } from 'rizzui'

export default function TrueFalse() {
  return (
    <div className="relative flex h-[350px] max-w-80 items-center justify-center rounded-lg bg-[#2D70AE]">
      <button type="button" className="absolute left-2 top-2 rounded-[4px] bg-[#e7e6e677] p-[4px] hover:bg-[#938A91]">
        <FaRegImage className="text-sm text-white " />
      </button>
      <Checkbox className="absolute right-2 top-2" rounded="full" inputClassName="bg-white hover:enabled:border-[#fff] enabled:border-[#fff] checked:!bg-[#02c984] checked:!border-2-[#fff]" />
      <div className="trueFalse_answer_placeholder text-center text-[16px] text-white outline-none" contentEditable={true} data-text="True"></div>
    </div>
  )
}
