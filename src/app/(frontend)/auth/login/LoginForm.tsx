'use client'

import postData from '@/utils/fetch/postData'
import { Form, Formik, useFormikContext } from 'formik'
import Link from 'next/link'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Checkbox } from 'rizzui'
import * as Yup from 'yup'
import Button from '../../components/Button'
import InputPhone from '../../components/InputPhone'
import Verification from '../../components/Verification'

const userSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  trusted: Yup.boolean(),
})

export default function LoginForm() {
  const [token, setToken] = useState('')
  const [trusted, setTrusted] = useState(false)

  const handleLogin = async (values: any) => {
    const response = await postData('register/signin', '', values)

    if (response.status) {
      setToken(response.data)
      setTrusted(values.trusted)
    } else {
      toast.error(response.message)
    }
  }

  if (token) return <Verification token={token} trusted={trusted} />

  return (
    <>
      <div className="mb-4 flex w-full flex-col items-center justify-center gap-4 text-center">
        <img className="h-40 w-40" src="/images/logo.png" alt="bible quiz logo" />

        <h1 className=" text-3xl font-medium">Login</h1>
        <p className="text-lg font-normal leading-7">Enter registered number for OTP to login</p>
      </div>

      <Formik
        initialValues={{
          countryCode: '+91',
          phone: '',
          trusted: false,
        }}
        validationSchema={userSchema}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <InputPhone />

            <label className="pb-b flex w-full cursor-pointer items-center gap-3 py-6">
              <Checkbox size="sm" name="trusted" checked={values.trusted} onChange={handleChange} onBlur={handleBlur} />
              <span className="label-text select-none text-lg">Keep me logged in</span>
            </label>

            <Button type="submit" height={12} title="Login" />
          </Form>
        )}
      </Formik>

      <div className="w-full p-2 text-center text-base">
        Do you not have an account?
        <Link className="ml-2 text-base font-medium capitalize text-[#781970d6] underline" href="/auth/register">
          register
        </Link>
      </div>
    </>
  )
}
