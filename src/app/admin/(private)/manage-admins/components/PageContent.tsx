'use client'

import { useEffect, useState } from 'react'
import AdminForm from './AdminForm'
import AdminTable from './AdminTable'
import AddButton from '../../components/AddButton'

export type Admin = {}

export default function PageContent({ data }: { data: Admin }) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return (
    <>
      <AdminForm formData={formData} modalState={modalState} setModalState={setModalState} />
      <AddButton name="Admin" setModalState={setModalState} />
      <AdminTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
