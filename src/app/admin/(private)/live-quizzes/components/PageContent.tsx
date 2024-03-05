'use client'

import { useEffect, useState } from 'react'
import FAQForm from './FAQForm'
import FAQTable from './FAQTable'
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
      <FAQForm
        formData={formData}
        modalState={modalState}
        setModalState={setModalState}
      />
      <AddButton name="Admin" setModalState={setModalState} />
      <FAQTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
