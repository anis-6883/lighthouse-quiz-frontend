'use client'

import { useEffect, useState } from 'react'
import AddButton from '../../components/AddButton'
import QuestionForm from '../../question-bank/components/QuestionForm'
import QuestionTable from '../../question-bank/components/QuestionTable'
import AddFromQBank from './AddFromQBank'

export default function PageContent({ data }: any) {
  const [newQuesModal, setNewQuesModal] = useState(false)
  const [quesBankModal, setQuesBankModal] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (newQuesModal == false) setFormData({})
  }, [newQuesModal])

  return (
    <>
      <QuestionForm formData={formData} modalState={newQuesModal} setModalState={setNewQuesModal} />
      <AddFromQBank formData={data.question} modalState={quesBankModal} setModalState={setQuesBankModal} id={data._id} />

      <div className="flex justify-end gap-5">
        <AddButton className="block" name="Question" setModalState={setNewQuesModal} />
        <AddButton className="block" prefix="Add" name="from Question Bank" setModalState={setQuesBankModal} />
      </div>

      <QuestionTable data={data.questionDetails} edit={setNewQuesModal} formData={setFormData} />
    </>
  )
}
