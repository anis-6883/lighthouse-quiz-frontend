import { Checkbox } from 'rizzui'

export default function CheckboxCard({ bg_color, imageSrc, option_text }: { bg_color?: any; imageSrc?: any; option_text: any }) {
  return (
    <>
      <label className={`flex min-h-16 items-center justify-between gap-4 ${bg_color} my-3 cursor-pointer rounded-2xl px-5 py-3 text-[#fff] shadow-md`}>
        <div className="flex items-center gap-2">
          {imageSrc != null && <img className="h-[45px] w-[45px] rounded-lg object-fill sm:h-[56px] sm:w-[56px]" src={imageSrc} alt="option image" />}
          <span className="text-sm font-medium sm:text-lg ">{option_text}</span>
        </div>
        <Checkbox inputClassName="checked:!bg-black bg-white border-none " />
        {/* <input type="checkbox" className="h-5 w-6 cursor-pointer rounded-md accent-[#1F2937]" /> */}
      </label>
    </>
  )
}
