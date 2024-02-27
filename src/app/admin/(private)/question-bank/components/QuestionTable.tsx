'use client'

import toast from 'react-hot-toast'
import { Option } from '../../components/Actions'
import AskConfirmation from '../../components/AskConfirmation'
import Table from '../../components/Table'
import { useSession } from 'next-auth/react'
import { FcCheckmark } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'
import deleteData from '@/utils/fetch/deleteData'
import { Select } from 'rizzui'

let popup = false

export default function QuestionTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const { data: session } = useSession()
  const token = session?.user?.accessToken || ''
  console.log(data)

  const structure = [
    {
      header: 'Image',
      Cell: ({ row }: any) => {
        return <img src={row?.original?.image} alt="image" className="h-14 transition-all duration-500 hover:h-40" />
      },
    },
    {
      header: 'Question',
      Cell: ({ row }: any) => {
        return <Question data={row.original} />
      },
    },
    {
      header: 'Duration',
      Cell: ({ row }: any) => {
        return <Select label="Select" options={{ label: 'sajid', value: 'sajid' }} value={row.original.duration} />
      },
    },
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
          return AskConfirmation(t, () => deleteData('features', token, data._id))
        })
      },
    },
  ]

  return <Table data={data} structure={structure} options={options} />
}

function Question({ data }: any) {
  console.log(data)
  return (
    <div>
      <h1>{data.question}</h1>
      <div className="grid grid-cols-2">
        {data?.options?.map((option: { title: string; _id: string }, serial: number) => (
          <div key={option?._id} className="flex items-center gap-1">
            {serial === data.answer[0] ? <FcCheckmark /> : <RxCross2 className="text-red-500" />}

            <span>{option?.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
