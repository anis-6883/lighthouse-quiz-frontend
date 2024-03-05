'use client'

import { useEffect, useState } from 'react'
import AddButton from '../../components/AddButton'
import DailyQuizForm from './DailyQuizForm'
import DailyQuizTable from './DailyQuizTable'

export default function PageContent({ data }: any) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return (
    <>
      <DailyQuizForm formData={formData} modalState={modalState} setModalState={setModalState} />
      <AddButton name="Daily Quiz" setModalState={setModalState} />
      <DailyQuizTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
