
import { ErrorMessage } from 'formik'

export default function TextInput(props: any) {
  const {
    label,
    star,
  }: {
    label: string
    star: string
  } = props

  return (
    <div className="my-1 ">
      <label className="text-base font-bold capitalize">
        <span>{label}</span>
        <span className="ml-1 text-red-500">{star}</span>
      </label>

      <input
        id="name"
        {...props}
        className="w-full border-x-0 border-b-2 border-t-0 border-b-[#6949FF] p-1 outline-none"
        style={{ boxShadow: 'none' }}
      />

      <ErrorMessage name={props?.name} component="p" className="mt-2 text-red-600" />
    </div>
  )
}
