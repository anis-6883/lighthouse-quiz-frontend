'use client'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
export default function CountryCode({ title, requiredStar }: { title?: string; requiredStar?: any }) {
  return (
    <div className="group/phone-number relative ">
      <label className="text-base font-bold capitalize">
        {title} <span className="text-red-500">{requiredStar}</span>
      </label>
      {/* <PhoneNumber /> */}
      {/* <PhoneInput
      inputStyle={{
        width: '100%',
        height: '100%',
        border: 'none'
      }}
      dropdownStyle={{ border: 0 }}
      buttonStyle={{ border: 0, color: 'black', backgroundColor: 'transparent ' }}
      country={'in'}
      containerClass='w-full border-x-0 border-b-2 border-t-0 border-[#6949FF] outline-none'
    /> */}
      <PhoneInput defaultCountry="in" className="w-full border-b-2 border-b-[#6949FF] py-1" />

      {/* {clearable && <FieldClearButton size={size} onClick={onClear} className={cn(clearIconStyles.base, clearIconStyles.position[size])} />} */}
    </div>
  )
}
