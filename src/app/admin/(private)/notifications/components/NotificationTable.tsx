'use client'

import { Option } from '@/app/admin/(private)/components/Actions'
import AskConfirmation from '@/app/admin/(private)/components/AskConfirmation'
import deleteData from '@/utils/fetch/deleteData'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import Table from '../../components/Table'

let popup = false

export default function NotificationTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const { data: session } = useSession()
  const token = session?.user.accessToken || ''

  const structure = [
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Body',
      accessorKey: 'description',
    },
    {
      header: 'Time',
      accessorKey: 'description',
    },
    {
      header: 'Schedule',
      accessorKey: 'description',
    },
  ]

  const options: Option[] = [
    {
      name: 'Edit',
      action: (data: any) => {
        edit(true)
        formData({
          title: data.title,
          description: data.description,
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
          return AskConfirmation(t, () => deleteData('faq', token, data._id))
        })
      },
    },
  ]

  return <Table data={data} structure={structure} options={options} />
}
