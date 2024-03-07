'use client'

import { useEffect, useState } from 'react'
import NotificationForm from './NotificationForm'
import NotificationTable from './NotificationTable'
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
      <NotificationForm formData={formData} modalState={modalState} setModalState={setModalState} />
      <AddButton name="Notification" setModalState={setModalState} />
      <NotificationTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
