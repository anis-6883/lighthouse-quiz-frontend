'use client'

import { useEffect, useState } from 'react'
import FeatureForm from './FeatureForm'
import FeatureTable from './FeatureTable'
import AddButton from '../../components/AddButton'

export type Data = {
  title: string
  image: string
}

export default function PageContent({ data }: { data: Data }) {
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (modalState == false) setFormData({})
  }, [modalState])

  return (
    <>
      <FeatureForm
        formData={formData}
        modalState={modalState}
        setModalState={setModalState}
      />
      <AddButton name="Feature" setModalState={setModalState} />
      <FeatureTable data={data} edit={setModalState} formData={setFormData} />
    </>
  )
}
