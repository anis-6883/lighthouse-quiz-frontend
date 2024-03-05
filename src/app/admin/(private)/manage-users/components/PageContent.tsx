'use client'

import { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import AddButton from '../../components/AddButton'

export type FAQ = {
  title: string
  description: string
}

export default function PageContent({ data }: { data: FAQ }) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return (
    <>
      <UserForm formData={formData} modalState={modalState} setModalState={setModalState} />
      <AddButton name="User" setModalState={setModalState} />
      <UserTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
