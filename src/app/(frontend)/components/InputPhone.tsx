'use client'

import { ErrorMessage, useFormikContext } from 'formik'
import { useState } from 'react'
import { CountrySelector } from 'react-international-phone'
import 'react-international-phone/style.css'

export default function InputPhone({ title, star }: { title?: string; star?: any }) {
  const [countryCode, setCountryCode] = useState({
    iso2: 'in',
    dialCode: '91',
  })

  const { values, setFieldValue }: any = useFormikContext()

  return (
    <div className="my-1 ">
      <label className="text-base font-bold capitalize">
        {title}
        <span className="ml-1 text-red-500">{star}</span>
      </label>

      <div className="flex w-full items-center gap-1 border-b-2 border-b-[#6949FF] p-2">
        <CountrySelector
          selectedCountry={countryCode?.iso2}
          onSelect={(country) => {
            setCountryCode(country)
            setFieldValue('countryCode', '+' + country.dialCode)
          }}
        />

        <span>{countryCode.dialCode.length > 0 && '+' + countryCode.dialCode}</span>

        <input
          type="tel"
          name="phone"
          className="w-full border-0 p-0 outline-none focus:shadow-none focus:ring-0"
          onChange={(e) => setFieldValue('phone', e.target.value)}
          value={values.phone}
        />
      </div>

      <ErrorMessage name="phone" component="p" className="mt-2 text-red-600" />
    </div>
  )
}
