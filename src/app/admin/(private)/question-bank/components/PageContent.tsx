'use client'

import { useEffect, useState } from 'react'
import QuestionForm from './QuestionForm'
import QuestionTable from './QuestionTable'
import AddButton from '../../components/AddButton'

export default function PageContent({ data }: any) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return (
    <>
      <QuestionForm formData={formData} modalState={modalState} setModalState={setModalState} />
      <AddButton name="Question" setModalState={setModalState} />
      <QuestionTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
