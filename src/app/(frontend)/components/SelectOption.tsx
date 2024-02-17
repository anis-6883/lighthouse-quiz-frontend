export default function SelectOption({
  label,
  placeholder,
  name,
}: {
  label: string;
  placeholder: string;
  name: string;
}) {
  return (
    <div className="mb-4 w-full border-x-0 border-b-2 border-t-0 border-[#6949FF] pt-2 outline-none ">
      <label className="text-base font-bold">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        name={name}
        className=" mt-3 w-full pl-0 outline-none "
        style={{ boxShadow: 'none', borderColor: 'white' }}
      >
        <option disabled selected>
          {placeholder}
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </div>
  );
}
