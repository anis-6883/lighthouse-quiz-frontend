'use client'

import { QUESTION_DURATIONS } from '@/config/constants'
import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import updateData from '@/utils/fetch/updateData'
import { Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BsCheck2Circle } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import { PiRectangleThin, PiToggleRightFill } from 'react-icons/pi'
import { RiCheckboxFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { Button, Modal, Select } from 'rizzui'
import * as Yup from 'yup'
import Tiptap from '../../components/Tiptap'
import FillInTheBlankQuestion from './FillInTheBlankQuestion'
import MCQanswer from './MCQanswer'
import Question from './Question'
import TabButton from './TabButton'

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

  const [currentTab, setCurrentTab] = useState(0)
  const [durationValue, setDurationValue] = useState({ label: '5 seconds', value: '5' })

  const tabs = [
    {
      label: 'Multiple Choice',
      value: 'multiple-choice',
      icon: <FaQuestionCircle key={0} className="mr-1 text-base" />,
    },
    {
      label: 'Checkbox',
      value: 'checkbox',
      icon: <RiCheckboxFill key={1} className="mr-1 text-base" />,
    },
    {
      label: 'Open Ended',
      value: 'open-ended',
      icon: <HiMiniBars3CenterLeft key={2} className="mr-1 text-base" />,
    },
    {
      label: 'Fill in the Box',
      value: 'blank',
      icon: <PiRectangleThin key={3} className="mr-1 text-base" />,
    },
    {
      label: 'True/False',
      value: 'true-false',
      icon: <PiToggleRightFill key={4} className="mr-1 text-base" />,
    },
  ]

  const initialValues = {
    type: 'Multiple Choice',
    question: '',
    questionImage: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: [],
    duration: '',
  }

  const questionValidateSchema = Yup.object().shape({
    type: Yup.string().required('Required!'),
    // question: Yup.string().required('Required!'),
  })

  const handleSubmit = (values: any) => {
    console.log('Values: ', values)
  }

  return (
    <Modal isOpen={modalState} onClose={() => setModalState(false)} customSize="1250px">
      <div className="m-auto px-7 pb-8 pt-6">
        <div className="flex items-end justify-end">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={20} />
          </button>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={questionValidateSchema}>
          {({ values, setFieldValue, errors }) => {
            // console.log(errors)
            return (
              <Form>
                <div>
                  <h2 className="text-base font-medium">Select Question Type:</h2>
                  <div className="my-2 flex flex-col flex-wrap justify-around gap-5 p-4 md:flex-row">
                    {tabs.map((tab: { label: string; value: string; icon: React.ReactNode }, index: number) => (
                      <TabButton
                        tab={tab}
                        key={index}
                        active={currentTab === index}
                        icon={tab.icon}
                        onClick={() => {
                          setFieldValue('type', tab.value)
                          setCurrentTab(index)
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-base font-medium">Select Duration:</h2>
                  <div className="my-2 flex flex-col flex-wrap justify-around gap-5 p-4 md:flex-row">
                    <Select
                      variant="outline"
                      options={QUESTION_DURATIONS}
                      value={durationValue}
                      onChange={(item: { label: string; value: string }) => {
                        setFieldValue('duration', item.value)
                        setDurationValue(item)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Tiptap />
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
              </Form>
            )
          }}
        </Formik>
      </div>
    </Modal>
  )
}
