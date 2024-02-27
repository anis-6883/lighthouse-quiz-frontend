export default function AddButton({ name, setModalState }: { name: string; setModalState: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => setModalState(true)}
        type="button"
        className=" mb-3 rounded-lg border-b-[5px] border-b-[#543ACC] bg-[#6949FF] px-5 py-3 text-sm text-white"
      >
        Add New {name}
      </button>
    </div>
  )
}
