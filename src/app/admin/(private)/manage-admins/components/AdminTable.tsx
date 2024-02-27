'use client'

import deleteData from '@/utils/fetch/deleteData'
import toast from 'react-hot-toast'
import { Option } from '../../components/Actions'
import AskConfirmation from '../../components/AskConfirmation'
import Table from '../../components/Table'
import { Badge } from 'rizzui'
import { useSession } from 'next-auth/react'

let popup = false

export default function AdminTable({ data, edit, formData }: { data: any; edit: Function; formData: Function }) {
  const { data: session } = useSession()
  const token = session?.user.accessToken || ''

  const structure = [
    {
      header: 'Image',
      Cell: ({ row }: any) => <img src={row?.original?.image} alt="image" className="h-14 transition-all duration-500 hover:h-40" />,
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Type',
      accessorKey: 'type',
    },
    {
      header: 'Status',
      Cell: ({ row }: any) => {
        return row?.original?.status ? (
          <Badge color="success" size="lg">
            Active
          </Badge>
        ) : (
          <Badge color="danger" size="lg">
            Inactive
          </Badge>
        )
      },
    },
  ]

  const options: Option[] = [
    {
      name: 'Edit',
      action: (data: any) => {
        edit(true)
        formData({
          ...data,
          status: data.status ? 'Active' : 'Inactive',
        })
      },
    },
    {
      name: 'Delete',
      action: async (data: any) => {
        if (popup === true) return

        toast((t) => {
          popup = t.visible
          return AskConfirmation(t, () => deleteData('delete', token, data._id))
        })
      },
    },
  ]

  return <Table data={data} structure={structure} options={options} />
}
