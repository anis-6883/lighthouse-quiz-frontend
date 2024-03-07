'use client'

import deleteData from '@/utils/fetch/deleteData'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { FcCheckmark } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'
import { Option } from '../../components/Actions'
import AskConfirmation from '../../components/AskConfirmation'
import Table from '../../components/Table'

let popup = false

export default function QuestionTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''

  const structure = [
    {
      header: 'Question',
      Cell: ({ row }: any) => {
        return <Question data={row.original} />
      },
    },
    // {
    //   header: 'Duration',
    //   Cell: ({ row }: any) => {
    //     return <Select label="Select" options={{ , value: 'sajid' }} value={row.original.duration} />
    //   },
    // },
  ]

  const options: Option[] = [
    {
      name: 'Edit',
      action: (data: any) => {
        edit(true)
        formData({
          title: data.title,
          image: data.image,
          id: data._id,
        })
      },
    },
    {
      name: 'Delete',
      action: async (data: any) => {
        if (popup === true) return

        toast((t) => {
          popup = t.visible
          return AskConfirmation(t, () => deleteData('questions', token, data._id))
        })
      },
    },
  ]

  return <Table data={data} structure={structure} options={options} />
}

export function Question({ data }: any) {
  return (
    <div className="flex items-center gap-7 p-3">
      {data?.image && <img src={data.image} alt="image" className="h-20 rounded border-2" />}

      <div>
        <h1 className="mb-3 text-lg font-bold">{data.question}</h1>

        <div className="grid w-full grid-cols-4 gap-3">
          {data?.options?.map((option: { title: string; _id: string; image: string }, serial: number) => (
            <div key={option?._id} className="flex items-center gap-3">
              {serial === data.answer[0] ? <FcCheckmark /> : <RxCross2 className="text-red-500" />}
              {option?.image && <img src={option?.image} alt="image" className="h-10 rounded border-2" />}
              <span>{option?.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
