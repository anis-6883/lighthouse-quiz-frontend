'use client'

import deleteData from '@/utils/fetch/deleteData'
import toast from 'react-hot-toast'
import { Option } from '../../components/Actions'
import AskConfirmation from '../../components/AskConfirmation'
import Table from '../../components/Table'

let popup = false

export default function DeletionReqTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const structure = [
    {
      accessorKey: 'title',
      header: 'Name',
    },
    {
      accessorKey: 'title',
      header: 'Phone',
    },
    {
      accessorKey: 'title',
      header: 'Email',
    },
    {
      accessorKey: 'title',
      header: 'Source',
    },
    {
      accessorKey: 'title',
      header: 'Status',
    },
  ]

  const options: Option[] = [
    // {
    //   name: 'Edit',
    //   action: (data: any) => {
    //     edit(true)
    //     formData({
    //       title: data.title,
    //       image: data.image,
    //       id: data._id,
    //     })
    //   },
    // },
    // {
    //   name: 'Delete',
    //   action: async (data: any) => {
    //     if (popup === true) return
    //     toast((t) => {
    //       popup = t.visible
    //       return AskConfirmation(t, () => deleteData('features', data._id))
    //     })
    //   },
    // },
  ]

  return <Table data={data} structure={structure} options={options} />
}
