import { useState } from 'react'
import { FcAddImage, FcRemoveImage } from 'react-icons/fc'
import CropImageUpload from './CropImageUpload'

export default function Question() {
  const [showImageUpload, setShowImageUpload] = useState(false)
  return (
    <div className="question-part grid grid-cols-12 gap-4 pb-8">
      {showImageUpload && (
        <div className="col-span-12 md:col-span-4">
          <CropImageUpload name="questionImage" />
        </div>
      )}

      <div
        className={`relative col-span-12 h-[350px] w-full rounded-xl border border-[#727171] bg-transparent text-lg text-gray-400 ${showImageUpload && 'md:col-span-8'}`}
      >
        <button
          type="button"
          className="absolute left-2 top-2 block rounded-md bg-[#e7e6e677] p-[4px] hover:bg-[#938A91]"
          onClick={() => setShowImageUpload(!showImageUpload)}
        >
          {showImageUpload ? <FcRemoveImage className="block text-lg text-white" /> : <FcAddImage className="block text-lg text-white" />}
        </button>
        <div className="editor-container flex h-full w-full items-center justify-center overflow-hidden rounded-xl focus-within:bg-[#281226]">
          <div
            contentEditable={true}
            data-placeholder="Enter text here"
            className="question_placeholder w-full max-w-3xl overflow-y-auto overflow-x-hidden py-4 text-center text-[20px] text-white outline-none"
            onInput={function (e) {
              const target = e.target as HTMLDivElement
              console.log(target.innerText)
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
