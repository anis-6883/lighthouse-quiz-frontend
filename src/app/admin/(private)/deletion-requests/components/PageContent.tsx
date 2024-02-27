'use client'

import { useEffect, useState } from 'react'
import DeletionReqTable from './DeletionReqTable'

export default function PageContent({ data }: any) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return <DeletionReqTable data={data} edit={setModalState} formData={setFormData} />
}
