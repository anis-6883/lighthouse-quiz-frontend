'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import updateData from '@/utils/fetch/updateData'
import { ErrorMessage, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { RxCross2 } from 'react-icons/rx'
import { Button, Input, Modal, Textarea } from 'rizzui'
import * as Yup from 'yup'

const faqSchema = Yup.object().shape({
  title: Yup.string().required('Question is required'),
  description: Yup.string().required('Answer is required'),
})

type props = {
  formData: any
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserForm({ formData, modalState, setModalState }: props) {
  const { data: session } = useSession()
  const token = session?.user.accessToken || ''

  const handleQuestion = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      title: values.title,
      description: values.description,
    }

    const response = formData?.id ? () => updateData('faq', token, payload, formData.id) : () => postData('admin/faq', token, payload)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('faq')
          setModalState(false)
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
    <Modal isOpen={modalState} onClose={() => setModalState(false)}>
      <div className="m-auto px-7 pb-8 pt-6">
        <div className=" flex items-end justify-end">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={40} />
          </button>
        </div>

        <div className="">
          <Formik
            initialValues={{ title: formData?.title || '', description: formData?.description || '' }}
            validationSchema={faqSchema}
            onSubmit={handleQuestion}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => {
              return (
                <Form>
                  <Input
                    label="Question *"
                    inputClassName="border-2 mb-1"
                    name="title"
                    size="lg"
                    placeholder="Question"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <ErrorMessage name="title" component="p" />

                  <div className="my-3">
                    <Textarea
                      label="Answer *"
                      className="mb-1 w-full"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />

                    <ErrorMessage name="description" component="p" />
                  </div>

                  <Button type="submit" size="lg" className="col-span-2 mt-2" onClick={() => handleQuestion} disabled={isSubmitting}>
                    {formData.id ? 'Update' : 'Add'}
                  </Button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  )
}
