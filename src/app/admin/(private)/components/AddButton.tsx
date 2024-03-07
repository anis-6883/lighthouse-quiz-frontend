import { HiPlus } from 'react-icons/hi'

type props = any

export default function AddButton(props: props) {
  const { name, setModalState, className = 'flex w-full justify-end', prefix = 'Add New' } = props
  return (
    <div className={className}>
      <button
        onClick={() => setModalState(true)}
        type="button"
        className=" mb-3 flex items-center gap-2 rounded-lg border-b-[5px] border-b-[#543ACC] bg-[#6949FF] px-5 py-3 text-sm text-white"
      >
        <HiPlus className="text-base" /> {prefix} {name}
      </button>
    </div>
  )
}
