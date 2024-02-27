'use client'

import { ErrorMessage, Form, Formik } from 'formik'
import { RxCross2 } from 'react-icons/rx'
import { Button, Input, Modal, Select } from 'rizzui'
import * as Yup from 'yup'
import ImageInputField from '../../components/ImageInputField'
import toast from 'react-hot-toast'
import updateData from '@/utils/fetch/updateData'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import { Response } from '@/data/response'

const adminSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  type: Yup.string().required('Type is required'),
  status: Yup.string().required('Status is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})

type props = {
  formData: any
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AdminForm({ formData, modalState, setModalState }: props) {
  const handleAdmin = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      name: values.name,
      email: values.email,
      type: values.type,
      status: values.status === 'Active' ? true : false,
      password: values.password,
      image: values.image,
      existing: formData.image,
    }

    const response = formData?._id ? () => updateData('update', payload, formData._id) : () => postData('register', payload)

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('register')
          setModalState(false)
          resetForm()
          return data.message
        }

        throw new Error(data.message)
      },
      error: (error) => error.message,
    })
  }

  return (
    <Modal isOpen={modalState} size="lg" onClose={() => setModalState(false)}>
      <div className="m-auto px-7 pb-8 pt-6">
        <div className=" flex items-end justify-end bg-[var(--background)]">
          <button className="pl-5 text-3xl" onClick={() => setModalState(false)}>
            <RxCross2 size={40} />
          </button>
        </div>

        <Formik
          initialValues={{
            name: formData?.name || '',
            email: formData?.email || '',
            type: formData?.type || '',
            status: formData?.status || '',
            password: '',
            confirmPassword: '',
            image: formData?.image,
          }}
          validationSchema={adminSchema}
          onSubmit={handleAdmin}
        >
          {({ values, handleChange, handleBlur, isSubmitting, setFieldValue }) => {
            return (
              <Form className="grid grid-cols-2 gap-x-5 gap-y-6">
                <div>
                  <Input label="Name *" inputClassName="border-2" name="name" size="lg" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="Name" />
                  <ErrorMessage name="name" component="p" />
                </div>

                <div>
                  <Input label="Email *" inputClassName="border-2" name="email" size="lg" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email" />
                  <ErrorMessage name="email" component="p" />
                </div>

                <div>
                  <Select
                    label="Administrator Type *"
                    name="type"
                    options={[
                      { label: 'Admin', value: 'Admin' },
                      { label: 'Manager', value: 'Manager' },
                    ]}
                    value={values.type}
                    onChange={(selected: { value: string }) => setFieldValue('type', selected.value)}
                  />
                  <ErrorMessage name="type" component="p" />
                </div>

                <div>
                  <Select
                    label="Status *"
                    name="status"
                    options={[
                      { label: 'Active', value: 'Active' },
                      { label: 'Inactive', value: 'Inactive' },
                    ]}
                    value={values.status}
                    onChange={(selected: { value: string }) => setFieldValue('status', selected.value)}
                  />

                  <ErrorMessage name="status" component="p" />
                </div>

                <div>
                  <Input label="Password *" inputClassName="border-2 " name="password" size="lg" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                  <ErrorMessage name="password" component="p" />
                </div>

                <div>
                  <Input label="Confirm Password *" inputClassName="border-2" name="confirmPassword" size="lg" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
                  <ErrorMessage name="confirmPassword" component="p" />
                </div>

                <div className="col-span-2">
                  <ImageInputField label="Image *" name="image" />
                  <ErrorMessage name="image" component="p" />
                </div>

                <Button type="submit" size="lg" className="col-span-2 mt-2" disabled={isSubmitting}>
                  {formData._id ? 'Update' : 'Add'}
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Modal>
  )
}
