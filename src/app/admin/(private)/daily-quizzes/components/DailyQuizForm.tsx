'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import updateData from '@/utils/fetch/updateData'
import { ErrorMessage, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { RxCross2 } from 'react-icons/rx'
import { Button, Input, Modal } from 'rizzui'
import * as Yup from 'yup'

const dailyQuizTitleSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
})

type props = {
  formData: any
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DailyQuizForm({ formData, modalState, setModalState }: props) {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''
  const router = useRouter()

  const handleDailyQuizTitle = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = { title: values.title }

    const response = formData?.id ? () => updateData('daily-quiz', token, payload, formData.id) : () => postData('admin/daily-quiz', token, payload)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('daily-quiz/list')
          setModalState(false)
          resetForm()
          router.push('/admin/daily-quizzes/' + data.data._id)
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
    <Modal isOpen={modalState} onClose={() => setModalState(false)}>
      <div className="m-auto px-7 pb-8 pt-6">
        <div className=" flex items-end justify-end">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={40} />
          </button>
        </div>

        <Formik
          initialValues={{ title: formData?.title || '', image: formData?.image }}
          validationSchema={dailyQuizTitleSchema}
          onSubmit={handleDailyQuizTitle}
        >
          {({ values, handleChange, handleBlur, isSubmitting }) => {
            return (
              <Form>
                <Input
                  label="Title *"
                  inputClassName="border-2"
                  name="title"
                  size="lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <ErrorMessage name="title" component="p" />

                <Button type="submit" size="lg" className="col-span-2 mt-2" disabled={isSubmitting}>
                  {formData.id ? 'Update' : 'Add'}
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Modal>
  )
}
