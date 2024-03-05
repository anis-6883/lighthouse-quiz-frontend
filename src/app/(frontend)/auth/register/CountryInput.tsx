'use client'

import { ErrorMessage, useFormikContext } from 'formik'
import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

export default function InputCountry() {
  const [country, setCountry] = useState('')
  const { setFieldValue }: any = useFormikContext()

  return (
    <div className="my-1">
      <label className="text-base font-bold capitalize">
        Country <span className="text-red-500">*</span>
      </label>

      <div className="border-b-2 border-b-[#6949FF] ">
        <ReactFlagsSelect
          selected={country}
          onSelect={(country) => {
            setCountry(country)
            setFieldValue('country', country)
          }}
          className="w-full  border-b-[#6949FF]"
          selectButtonClassName="!border-0 !p-1"
          searchable
        />
      </div>

      <ErrorMessage name="country" component="p" className="mt-2 text-red-600" />
    </div>
  )
}
