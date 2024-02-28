import { useFormikContext } from 'formik'
import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

export default function CountryCode() {
  const [country, setCountry] = useState('')

  const { setFieldValue }: any = useFormikContext()

  return (
    <div className="group/phone-number relative ">
      <label className="text-base font-bold capitalize">
        Country <span className="text-red-500">*</span>
      </label>

      <div className="flex items-center border-b-2 border-b-[#6949FF] py-1">
        <ReactFlagsSelect
          selected={country}
          onSelect={(country) => {
            console.log(country)
            setCountry(country)
            setFieldValue('country', country)
          }}
          className="w-full  border-b-[#6949FF]"
          selectButtonClassName="!border-0"
          searchable
        />
      </div>
    </div>
  )
}
