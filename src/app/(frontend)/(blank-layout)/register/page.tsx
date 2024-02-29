import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import Link from 'next/link'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import CountryCode from '../../components/CountryCode'
import SelectOption from '../../components/SelectOption'
import TextInput from '../../components/TextInput'

export const metadata = {
  ...metaObject('User Register'),
}

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto grid min-h-screen max-w-3xl place-items-center bg-[#ffffff]">
        <div className="my-6 flex w-full flex-col items-center justify-center gap-3 overflow-hidden px-4 sm:max-w-[640px] sm:px-12">
          <div className="mt-2 flex flex-col items-center justify-center gap-4 px-12 text-center">
            <progress className="progress progress-primary h-4 w-56 bg-slate-200" value="70" max="100"></progress>
            <h1 className="text-xl font-medium sm:text-2xl">Create an account ✏️</h1>
            <p className="text-lg ">Please complete your profile to participate in the Quiz!</p>
          </div>

          <form className="flex w-full flex-col gap-3 ">
            <TextInput
              label="Your Name"
              name="username"
              placeholder="Ex.John Doe"
              requiredStar="*"
              type="text"
              // value={values.username}
              // onChange={handleChange}
              // onFocus={handleBlur}
              // errors={errors.username}
              // touched={touched.username}
            />
            <CountryCode title="Phone Number" requiredStar="*" />

            <SelectOption name="country" label="Country" placeholder="Select Country" />

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
                    // style={{ boxShadow: 'none' }}
                    // onChange={handleChange}
                  />
                  <span className="text-base capitalize">Male</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="gender"
                    className="radio-primary radio-xs"
                    value="female"
                    // style={{ boxShadow: 'none' }}
                    // onChange={handleChange}
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
              // value={values.age}
              // onChange={handleChange}
              // onFocus={handleBlur}
              // errors={errors.age}
              // touched={touched.age}
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
                    // style={{ boxShadow: 'none' }}
                    // value="tamil"
                    // onChange={handleChange}
                  />
                  <span className="text-base capitalize">Tamil</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="language"
                    className="radio-primary radio-xs"
                    // style={{ boxShadow: 'none' }}
                    // value="both"
                    // onChange={handleChange}
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
              // value={values.email}
              // onChange={handleChange}
              // onFocus={handleBlur}
              // errors={errors.email}
              // touched={touched.email}
            />
            <TextInput
              label="Church you Attend"
              name="church"
              type="text"
              placeholder=""
              requiredStar=""
              // value={values.church}
              // onChange={handleChange}
              // onFocus={handleBlur}
              // errors={errors.church}
              // touched={touched.church}
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

          <div className="w-full p-2 text-base">
            Already have an account?
            <Link className="ml-2 text-base font-medium capitalize text-[#781970d6] underline" href={routes.signIn}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
