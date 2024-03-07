'use client'

import deleteData from '@/utils/fetch/deleteData'
import toast from 'react-hot-toast'
import { Option } from '../../components/Actions'
import AskConfirmation from '../../components/AskConfirmation'
import Table from '../../components/Table'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

let popup = false

export default function DailyQuizTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''
  const router = useRouter()

  const structure = [
    {
      header: 'Image',
      Cell: ({ row }: any) => <img src={row?.original?.image} alt="image" className="h-14 transition-all duration-500 hover:h-40" />,
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'totalNumberOfQuestions',
      header: 'Questions',
      size: 1,
    },
    {
      Cell: ({ row }: any) => <>5</>,
      size: 1,
      // accessorKey: 'played',
      header: 'Played',
    },
    {
      Cell: ({ row }: any) => {
        const formattedDate: string = new Date(row?.original?.publishDate).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
        return formattedDate
      },
      size: 1,
      accessorKey: 'publishDate',
      header: 'Date',
    },
  ]

  const options: Option[] = [
    {
      name: 'Duplicate',
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
      name: 'Edit',
      action: (data: any) => {
        console.log(data)

        // formData({
        //   title: data.title,
        //   image: data.image,
        //   id: data._id,
        // })
        // router.push('/admin/daily-quizzes/' + data._id)
      },
    },
    {
      name: 'Delete',
      action: async (data: any) => {
        if (popup === true) return

        toast((t) => {
          popup = t.visible
          return AskConfirmation(t, () => deleteData('daily-quiz', token, data._id))
        })
      },
    },
  ]

  return <Table data={data} structure={structure} options={options} />
}
