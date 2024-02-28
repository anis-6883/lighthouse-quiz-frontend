export default function TextInput(props: any) {
  const {
    label,
    requiredStar,
  }: {
    label: string
    requiredStar: string
  } = props

  return (
    // <div className="w-full">
    //   <label className="text-base font-bold capitalize">
    //     {label} <span className="text-red-500">{requiredStar}</span>
    //   </label>
    //   <input
    //     id="name"
    //     type={type}
    //     name={name}
    //     // value={value}
    //     // onChange={onChange}
    //     // onFocus={onFocus}
    //     placeholder={placeholder}
    //     className="w-full border-none border-[#6949FF] px-2 pb-4 pt-2 outline-none"
    //   />
    //   {/* <p className="text-red-600 mt-2">{errors && touched && errors}</p> */}
    // </div>

    <div className="w-full">
      <label className="text-base font-bold capitalize">
        {label} <span className="text-red-500">{requiredStar}</span>
      </label>
      <input
        id="name"
        {...props}
        className="w-full border-x-0 border-b-2 border-t-0 border-b-[#6949FF] px-2 pb-4 pt-2 outline-none"
        style={{ boxShadow: 'none' }}
      />
      {/* <p className="text-red-600 mt-2">{errors && touched && errors}</p> */}
    </div>
  )
}
