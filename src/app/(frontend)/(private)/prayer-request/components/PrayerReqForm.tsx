import Button from '@/app/(frontend)/components/Button'
import { Input, Textarea } from 'rizzui'

export default function PrayerReqForm() {
  return (
    <form className="mt-4 flex flex-col gap-5">
      <Input
        label={
          <>
            Subject <span className="text-red-500">*</span>
          </>
        }
        placeholder=" "
        style={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
        labelClassName="text-lg font-semibold text-[#212121]"
        inputClassName="bg-[#FAEBFF] outline-none py-7 shadow-md shadow-[#C3C3C3] border-none ring-0 focus:border-none focus:ring-white"
        variant="text"
        rounded="pill"
      />

      <Textarea
        label={
          <>
            Description <span className="text-red-500 ">*</span>
          </>
        }
        variant="text"
        style={{ borderColor: 'transparent' }}
        labelClassName="text-lg font-semibold text-[#212121]"
        textareaClassName="bg-[#FAEBFF] shadow-md shadow-[#C3C3C3] rounded-[30px] h-[220px] outline-none p-3"
      />

      <Button type="submit" height={14} title="Submit Request" />
    </form>
  )
}
