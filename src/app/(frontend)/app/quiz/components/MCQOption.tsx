import { Checkbox } from 'rizzui'

export default function MCQOption({
  index,
  bg_color,
  imageSrc,
  title,
  action,
}: {
  index: number
  bg_color: any
  imageSrc?: any
  title: string
  action: Function
}) {
  return (
    <label className={`flex min-h-16 items-center justify-between gap-4 ${bg_color} my-3 cursor-pointer rounded-2xl px-5 py-3 text-[#fff] shadow-md`}>
      <div className="flex items-center gap-2">
        {imageSrc != null && <img className="h-[45px] w-[45px] rounded-lg object-fill sm:h-[56px] sm:w-[56px]" src={imageSrc} alt="option image" />}
        <span className="text-sm font-medium sm:text-lg ">{title}</span>
      </div>
      <Checkbox rounded="full" inputClassName="checked:!bg-black border-black" onClick={() => action(index)} />
    </label>
  )
}
