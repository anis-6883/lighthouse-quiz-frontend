export default function CountryCode({
  label,
  placeholder,
  requiredStar,
}: {
  label: string;
  placeholder: string;
  requiredStar: string;
}) {
  return (
    <div className="w-full">
      <label className="text-base font-bold capitalize">
        {label} <span className="text-red-500">{requiredStar}</span>
      </label>
      <input
        id="name"
        // name={name}
        // type={type}
        // value={value}
        // onChange={onChange}
        // onFocus={onFocus}
        placeholder={placeholder}
        className="w-full border-x-0 border-b-2 border-t-0 border-[#6949FF] px-2 pb-4 pt-2 outline-none"
        style={{ boxShadow: 'none' }}
      />
      {/* <p className="text-red-600 mt-2">{errors && touched && errors}</p> */}
    </div>
  );
}
