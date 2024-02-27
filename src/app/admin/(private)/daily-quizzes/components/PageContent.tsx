'use client'

import { useEffect, useState } from 'react'
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

      <div className="flex w-full justify-end">
        <button
          onClick={() => setModalState(true)}
          type="button"
          className=" mb-3 rounded-lg border-b-[5px] border-b-[#543ACC] bg-[#6949FF] px-5 py-3 text-sm text-white"
        >
          Add New Feature
        </button>
      </div>

      <DailyQuizTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
