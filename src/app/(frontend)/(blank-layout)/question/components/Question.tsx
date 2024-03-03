import { FaRegImage } from 'react-icons/fa6'

export default function Question() {
  return (
    <>
      <div className="question-part pb-8">
        <div className=" relative flex h-[350px] w-full items-center justify-center rounded-lg border border-[#727171] bg-transparent text-lg text-gray-400">
          <button type="button" className=" absolute left-2 top-2 rounded-md bg-[#6e6e6e77] hover:bg-[#938A91]">
            <FaRegImage className="text-base text-white " />
          </button>
          <div className="editor-container">
            <div
              contentEditable={true}
              data-placeholder="Enter text here"
              className="question_placeholder text-center text-[20px] text-white outline-none"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
