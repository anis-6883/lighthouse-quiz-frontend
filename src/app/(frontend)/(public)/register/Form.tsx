'use client'

import { Response } from '@/data/response'
import postData from '@/utils/fetch/postData'
import reload from '@/utils/fetch/reload'
import { Formik } from 'formik'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import InputPhone from '../../components/InputPhone'
import SelectOption from '../../components/SelectOption'
import TextInput from '../../components/TextInput'
import Link from 'next/link'
import CountryCode from './CountryInput'

const userSchema = Yup.object().shape({
  //   title: Yup.string().required('Question is required'),
  //   description: Yup.string().required('Answer is required'),
})

export default function Form() {
  const { data: session } = useSession()
  const token = session?.user.accessToken || ''

  const handleQuestion = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      title: values.title,
      description: values.description,
    }

    const response = () => postData('faq', token, payload)

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
      }}
      validationSchema={userSchema}
      onSubmit={handleQuestion}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => {
        console.log(values)
        return (
          <form className="flex w-full flex-col gap-3 ">
            <TextInput
              label="Your Name"
              name="name"
              placeholder="Ex.John Doe"
              requiredStar="*"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.name}
            />

            <InputPhone title="Phone Number" requiredStar="*" />

            <CountryCode />

            {/* <SelectOption
              name="country"
              label="Country"
              placeholder="Select Country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.title}
            /> */}

            <div className="w-full border-b-2  border-[#6949FF] outline-none">
              <label htmlFor="language" className="text-base font-bold capitalize ">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4 px-2 pb-5 pt-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="gender"
                    className="radio-primary radio-xs"
                    value="male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.title}
                  />
                  <span className="text-base capitalize">Male</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="gender"
                    className="radio-primary radio-xs"
                    value="female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.title}
                  />
                  <span className="text-base capitalize">Female</span>
                </div>
              </div>
            </div>
            {/* <p className="text-red-600 ">
		    {errors.gender && errors.gender}
			</p> */}

            <TextInput
              label="Age"
              name="age"
              type="number"
              placeholder="Ex.12"
              requiredStar="*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.age}
            />
            {/* select language input */}
            <div className="w-full border-b-2 border-[#6949FF]  pt-1 outline-none">
              <label htmlFor="language" className="text-base font-bold capitalize ">
                Select Your quiz Language <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4 px-2 pb-5 pt-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="language"
                    className="radio-primary radio-xs"
                    // style={{ boxShadow: 'none' }}
                    // value="english"
                    // onChange={handleChange}
                  />
                  <span className="text-base capitalize">English</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="language"
                    className="radio-primary radio-xs"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.title}
                  />
                  <span className="text-base capitalize">Tamil</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="language"
                    className="radio-primary radio-xs"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.title}
                  />
                  <span className="text-base capitalize">Both</span>
                </div>
              </div>
            </div>
            {/* <p className="text-red-600 ">
									{errors.language && errors.language}
								</p> */}
            <TextInput
              label="Email"
              name="email"
              placeholder="email@example.com"
              type="email"
              requiredStar=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.title}
            />
            <TextInput
              label="Church you Attend"
              name="church"
              type="text"
              placeholder=""
              requiredStar=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.title}
            />
            <div className="flex w-full items-center gap-4 py-3">
              {/* <label className="label cursor-pointer"> */}

              <Checkbox />
              <span className="label-text text-base">
                I agree with the{' '}
                <Link className="capitalize underline" href="/login">
                  terms & condition
                </Link>
              </span>
              {/* </label> */}
            </div>
            {/* <p className="text-red-600 ">
									{errors.checkbox && errors.checkbox}
								</p> */}
            <Button
              type="submit"
              // disabled={isSubmitting}
              height={12}
              title="Register"
            />
          </form>
        )
      }}
    </Formik>
  )
}
