import { useFormikContext } from 'formik'
import { useState } from 'react'
import { FcAddImage, FcRemoveImage } from 'react-icons/fc'
import { Checkbox } from 'rizzui'
import CropImageUpload from './CropImageUpload'

export default function MCQAnswer({ rounded = false, index }: { rounded?: boolean; index: number }) {
  const [showImageUpload, setShowImageUpload] = useState(false)
  const { values, setFieldValue }: any = useFormikContext()

  const answerHandler = (index: number) => {
    switch (values.type) {
      case 'multiple-choice':
        setFieldValue(`answer[0]`, index)
        break
      case 'checkbox':
        if (values.answer.includes(index)) {
          setFieldValue(
            'answer',
            values.answer.filter((item: number) => item !== index),
          )
        } else {
          setFieldValue(`answer`, [...values.answer, index])
        }
        break
      case 'true-false':
        setFieldValue(`answer[0]`, index)
        break
    }
  }

  return (
    <div className="relative flex h-[350px] w-full items-center justify-center rounded-lg bg-[#2D70AE]">
      <button
        onClick={() => setShowImageUpload(!showImageUpload)}
        type="button"
        className="absolute left-2 top-2 rounded-[4px] bg-[#e7e6e677] p-[4px] hover:bg-[#938A91]"
      >
        {showImageUpload ? (
          <FcRemoveImage className="block text-lg text-white" onClick={() => setFieldValue(`option${index}image`, '')} />
        ) : (
          <FcAddImage className="block text-lg text-white" />
        )}
      </button>
      <Checkbox
        checked={
          (values.type === 'multiple-choice' && values.answer[0] === index) ||
          (values.type === 'checkbox' && values.answer.includes(index)) ||
          (values.type === 'true-false' && values.answer.includes(index))
        }
        onChange={() => answerHandler(index)}
        className="absolute right-2 top-2"
        rounded={rounded ? 'full' : 'md'}
        inputClassName="bg-white hover:enabled:border-[#fff] enabled:border-[#fff] checked:!bg-[#02c984] checked:!border-2-[#fff]"
      />
      <div className="flex flex-col gap-y-10">
        {showImageUpload && (
          <div>
            <CropImageUpload name={`option${index}image`} />
          </div>
        )}
        <div
          className="answer_placeholder text-center text-[16px] text-white outline-none"
          contentEditable={true}
          data-text="Enter your answer"
          onInput={function (e) {
            const target = e.target as HTMLDivElement
            console.log(target.innerText)
            setFieldValue(`option${index}`, target.innerText)
          }}
        ></div>
      </div>
    </div>
  )
}
