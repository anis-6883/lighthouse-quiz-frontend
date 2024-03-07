'use client'

import Button from '@/app/(frontend)/components/Button'
import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import { ErrorMessage, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { Input, Textarea } from 'rizzui'
import * as Yup from 'yup'

const prayerSchema = Yup.object().shape({
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
})

export default function PrayerReqForm() {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''
  console.log(token)

  const handlePrayer = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      subject: values.subject,
      description: values.description,
    }

    const response = () => postData('prayer/add', token, payload)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('prayer-request')
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
    <Formik initialValues={{ subject: '', description: '' }} validationSchema={prayerSchema} onSubmit={handlePrayer}>
      {({ values, handleChange, handleBlur, isSubmitting }) => {
        return (
          <Form className="mt-4 flex flex-col gap-5">
            <Input
              label={
                <>
                  Subject <span className="text-red-500">*</span>
                </>
              }
              name="subject"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              style={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
              labelClassName="text-lg font-semibold text-[#212121]"
              inputClassName="bg-[#FAEBFF] outline-none py-7 shadow-md shadow-[#C3C3C3] border-none ring-0 focus:border-none focus:ring-white"
              variant="text"
              rounded="pill"
            />
            <ErrorMessage name="subject" component="p" />

            <Textarea
              label={
                <>
                  Description <span className="text-red-500 ">*</span>
                </>
              }
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="text"
              style={{ borderColor: 'transparent' }}
              labelClassName="text-lg font-semibold text-[#212121]"
              textareaClassName="bg-[#FAEBFF] shadow-md shadow-[#C3C3C3] rounded-[30px] h-[220px] outline-none p-3"
            />
            <ErrorMessage name="description" component="p" />

            <Button type="submit" height={14} title="Submit Request" onClick={() => handlePrayer} disabled={isSubmitting} />
          </Form>
        )
      }}
    </Formik>
  )
}
