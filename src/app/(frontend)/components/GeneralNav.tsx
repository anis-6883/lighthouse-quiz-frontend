'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'

export default function GeneralNav() {
  const router = useRouter()

  return (
    <nav className="relative grid w-full justify-center py-3">
      <button type="button" onClick={() => router.back()}>
        <FaArrowLeft className="absolute left-0 top-4 text-2xl" />
      </button>
      
      <img className="h-[90px] w-[100px] object-fill" src="/images/logo.png" alt="bible quiz logo" />
    </nav>
  )
}
