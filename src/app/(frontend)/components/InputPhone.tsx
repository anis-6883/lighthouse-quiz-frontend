'use client'

import { useFormikContext } from 'formik'
import { useState } from 'react'
import { CountrySelector, PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export default function InputPhone({ title, requiredStar }: { title?: string; requiredStar?: any }) {
  const [countryCode, setCountryCode] = useState({
    iso2: 'in',
    dialCode: '91',
  })

  const { setFieldValue }: any = useFormikContext()

  return (
    <div className="group/phone-number relative ">
      <label className="text-base font-bold capitalize">
        {title} <span className="text-red-500">{requiredStar}</span>
      </label>

      <div className="flex w-full items-center gap-1 border-b-2 border-b-[#6949FF] py-1">
        <CountrySelector
          selectedCountry={countryCode?.iso2}
          onSelect={(country) => {
            setCountryCode(country)
            setFieldValue('countryCode', '+' + country.dialCode)
            console.log(country)
          }}
        />
        <span>{countryCode.dialCode.length > 0 && '+' + countryCode.dialCode}</span>
        <input className="w-full border-0 p-0 outline-none focus:shadow-none focus:ring-0" onChange={(e) => setFieldValue('phone', e.target.value)} />
      </div>
    </div>
  )
}
