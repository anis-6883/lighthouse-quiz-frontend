'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import InputPhone from '../../components/InputPhone'
import TextInput from '../../components/TextInput'
import InputCountry from './CountryInput'

const userSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
  age: Yup.number().min(0, 'Age must be a positive number').max(150, 'Age must be less than or equal to 150').required('Age is required'),
  language: Yup.string().required('Language is required'),
  email: Yup.string().email('Invalid email address'),
})

export default function SignUpForm() {
  const { data: session } = useSession()
  const token = session?.user.accessToken || ''

  const handleQuestion = async (values: any, { resetForm }: { resetForm: Function }) => {
    const response = () => postData('register/signup', token, values)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('faq')
          resetForm()
          return data.message
        }

        throw new Error(data.message)
      },
      error: (error) => {
        if (error.message) return error.message
        return 'Something went wrong!'
      },
    })
  }

  return (
    <Formik
      initialValues={{
        name: '',
        countryCode: '+91',
        phone: '',
        gender: '',
        country: '',
        age: '',
        language: '',
        church_you_attend: '',
      }}
      validationSchema={userSchema}
      onSubmit={handleQuestion}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => {
        console.log(values)

        return (
          <Form className="flex w-full flex-col gap-3 ">
            <TextInput label="Your Name" name="name" placeholder="Ex.John Doe" star="*" type="text" onChange={handleChange} onBlur={handleBlur} />
            <InputPhone title="Phone Number" star="*" />
            <InputCountry />

            <div className="my-1 w-full border-b-0 border-[#6949FF] outline-none">
              <label htmlFor="language" className="text-base font-bold ">
                <span>Gender</span>
                <span className="ml-1 text-red-500">*</span>
              </label>

              <div className="flex gap-4 p-1" role="group">
                <label className="flex cursor-pointer items-center gap-3">
                  <Field type="radio" name="gender" value="Male" className="radio-primary radio-xs" />
                  <span className="text-base">Male</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <Field type="radio" name="gender" value="Female" className="radio-primary radio-xs" />
                  <span className="text-base">Female</span>
                </label>
              </div>

              <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>

            <TextInput label="Age" name="age" type="number" placeholder="Ex.12" star="*" onChange={handleChange} onBlur={handleBlur} />

            {/* select language input */}
            <div className="my-1 w-full border-b-0 border-[#6949FF] outline-none">
              <label htmlFor="language" className="text-base font-bold capitalize ">
                Select Your quiz Language <span className="text-red-500">*</span>
              </label>

              <div className="flex gap-4 p-1">
                <label className="flex cursor-pointer items-center gap-3">
                  <Field type="radio" name="language" value="English" className="radio-primary radio-xs" />
                  <span className="text-base">English</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <Field type="radio" name="language" value="Tamil" className="radio-primary radio-xs" />
                  <span className="text-base">Tamil</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <Field type="radio" name="language" value="Both" className="radio-primary radio-xs" />
                  <span className="text-base">Both</span>
                </label>
              </div>
              <ErrorMessage name="language" component="div" className="text-red-500" />
            </div>

            <TextInput label="Email" name="email" placeholder="email@example.com" type="email" onChange={handleChange} onBlur={handleBlur} />
            <TextInput label="Church you Attend" name="church_you_attend" type="text" onChange={handleChange} onBlur={handleBlur} />

            <div className="flex w-full items-center gap-4 py-3">
              <label className="label  cursor-pointer">
                <Checkbox />

                <span className="label-text ml-2 text-base">
                  I agree with the
                  <Link className="ml-1 underline" href="/login">
                    Terms & Condition
                  </Link>
                </span>
              </label>
            </div>

            <Button
              type="submit"
              // disabled={isSubmitting}
              height={12}
              title="Register"
            />
          </Form>
        )
      }}
    </Formik>
  )
}
