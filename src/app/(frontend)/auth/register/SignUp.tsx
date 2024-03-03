'use client'

import { useState } from 'react'
import Verification from '../../components/Verification'
import SignUpForm from './Form'

export default function SignUp() {
  const [token, setToken] = useState('')

  return token.length > 0 ? <Verification token={token} /> : <SignUpForm setToken={setToken} />
}
