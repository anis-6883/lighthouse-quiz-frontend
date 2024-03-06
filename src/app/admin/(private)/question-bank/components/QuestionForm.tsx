'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import updateData from '@/utils/fetch/updateData'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BsCheck2Circle } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import { PiRectangleThin, PiToggleRightFill } from 'react-icons/pi'
import { RiCheckboxFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { Button, Modal } from 'rizzui'
import * as Yup from 'yup'
import FillInTheBlankQuestion from './FillInTheBlankQuestion'
import MCQanswer from './MCQanswer'
import Question from './Question'
import TabButton from './TabButton'

const featureSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  image: Yup.string().required('Image is required'),
})

type props = {
  formData: any
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function QuestionForm({ formData, modalState, setModalState }: props) {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''

  const handleFeature = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      title: values.title,
      image: values.image,
      existing: formData.image,
    }

    const response = formData?.id ? () => updateData('features', token, payload, formData.id) : () => postData('admin/features', token, payload)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('features')
          setModalState(false)
          resetForm()
          return data.message
        }

        throw new Error(data.message)
      },
      error: (error) => error.message,
    })
  }

  const initialValues = {
    type: 'multipleChoice',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: [],
  }

  const [currentTab, setCurrentTab] = useState(0)
  const tabs = ['Multiple Choice', 'Checkbox', 'Open Ended', 'Fill in the Box', 'True/False']
  const icons = [
    <FaQuestionCircle key={0} className="mr-1 text-base" />,
    <RiCheckboxFill key={1} className="mr-1 text-base" />,
    <HiMiniBars3CenterLeft key={2} className="mr-1 text-base" />,
    <PiRectangleThin key={3} className="mr-1 text-base" />,
    <PiToggleRightFill key={4} className="mr-1 text-base" />,
  ]

  return (
    <Modal isOpen={modalState} onClose={() => setModalState(false)} customSize="1250px">
      <div className="m-auto px-7 pb-8 pt-6">
        <div className=" flex items-end justify-end">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={20} />
          </button>
        </div>

        <div>
          <h2 className="text-base font-medium">Select Question Type:</h2>
          <div className="my-2 flex flex-wrap justify-around gap-5 p-4">
            {tabs.map((tab: string, index: number) => (
              <TabButton tab={tab} key={index} active={currentTab === index} icon={icons[index]} onClick={() => setCurrentTab(index)} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-[#461A42] p-6">
          <Question />

          <div hidden={currentTab === 0 ? false : true}>
            <div className="flex gap-5">
              <MCQanswer rounded />
              <MCQanswer rounded />
              <MCQanswer rounded />
              <MCQanswer rounded />
            </div>
          </div>

          <div hidden={currentTab === 1 ? false : true}>
            <div className="flex gap-5">
              <MCQanswer />
              <MCQanswer />
              <MCQanswer />
              <MCQanswer />
            </div>
          </div>

          <div hidden={currentTab === 3 ? false : true}>
            <FillInTheBlankQuestion />
          </div>

          <div hidden={currentTab === 4 ? false : true}>
            <div className="flex gap-5">
              <MCQanswer rounded />
              <MCQanswer rounded />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button size="sm" type="submit" color="primary" variant="solid">
            Submit <BsCheck2Circle className="ml-2 text-base" />
          </Button>
        </div>
      </div>
    </Modal>
  )
}
