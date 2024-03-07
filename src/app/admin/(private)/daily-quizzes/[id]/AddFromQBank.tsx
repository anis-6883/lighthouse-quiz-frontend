'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import updateData from '@/utils/fetch/updateData'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiSearch } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { Button, Checkbox, Input, Modal, Title } from 'rizzui'
import * as Yup from 'yup'
import { Question } from './../../question-bank/components/QuestionTable'

const featureSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  image: Yup.string().required('Image is required'),
})

type props = {
  formData: any
  modalState: boolean
  id: string
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFromQBank({ id, formData, modalState, setModalState }: props) {
  const [questions, setQuestions] = useState<any>([])
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''
  const [selectedQuestion, setSelectedQuestion] = useState(formData)
  const [search, setSearch] = useState('')

  const handleQuestions = async () => {
    const response = () => updateData(`daily-quiz/add-question`, token, { question: selectedQuestion }, id)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload(`daily-quiz/find-quiz/${id}`)
          setModalState(false)
          return data.message
        }

        throw new Error(data.message)
      },
      error: (error) => error.message,
    })
  }

  const updateQuestion = (id: string) => {
    console.log(id)
    if (selectedQuestion.includes(id)) {
      setSelectedQuestion((prev: string[]) => prev.filter((question: string) => question !== id))
    } else {
      setSelectedQuestion(() => [...selectedQuestion, id])
    }
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      let response: any = await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/admin/questions?search=${search}`, {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${token}`,
        } as HeadersInit,
      })
      response = await response.json()

      if (response.status) setQuestions(response.data)
      else toast.error(response.message)
    }

    fetchQuestions()
  }, [search, token])

  return (
    <Modal isOpen={modalState} onClose={() => setModalState(false)} size="xl">
      <div className="m-auto px-7 pb-8 pt-6">
        <div className=" flex items-end justify-end">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={20} />
          </button>
        </div>

        <Title>Question List</Title>
        <Input placeholder="Search Question" className="my-3" prefix={<BiSearch />} onChange={(e) => setSearch(e.target.value)} />

        <div className="h-96 overflow-x-hidden overflow-y-scroll shadow">
          {questions.map((question: { question: string; _id: string }, index: number) => (
            <label
              key={question._id}
              className={(index % 2 == 0 ? 'bg-gray-100' : '') + ' ' + 'flex w-full cursor-pointer select-none items-center gap-7 border p-3'}
            >
              <Checkbox checked={selectedQuestion.includes(question._id)} onClick={() => updateQuestion(question._id)} size="sm" />
              <Question data={question} />
            </label>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <Button className="mx-auto text-center" onClick={handleQuestions}>
            Update
          </Button>
        </div>
      </div>
    </Modal>
  )
}
