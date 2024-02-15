'use client';

import { Response } from '@/data/response';
import postData from '@/utils/fetch/postData';
import reload from '@/utils/fetch/reload';
import updateData from '@/utils/fetch/updateData';
import { ErrorMessage, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Button, Input, Modal, Textarea } from 'rizzui';
import * as Yup from 'yup';

const faqSchema = Yup.object().shape({
  title: Yup.string().required('Question is required'),
  description: Yup.string().required('Answer is required')
});

type props = {
  formData: any;
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FeatureForm({ formData, modalState, setModalState }: props) {
  const handleQuestion = async (values: any, { resetForm }: { resetForm: Function }) => {
    const payload = {
      title: values.title,
      description: values.description
    };

    const response = formData?.id ? () => updateData('faq', payload, formData.id) : () => postData('faq', payload);

    toast.promise(response(), {
      loading: 'Please wait...',
      success: (data: Response) => {
        if (data.status) {
          reload('faq');
          setModalState(false);
          resetForm();
          return data.message;
        }

        throw new Error(data.message);
      },
      error: (error) => error.message
    });
  };

  return (
    <Modal isOpen={modalState} onClose={() => setModalState(false)}>
      <div className='m-auto px-7 pt-6 pb-8'>
        <div className=' flex items-end justify-end'>
          <button className='text-3xl pl-5' onClick={() => setModalState(false)}>
            X
          </button>
        </div>

        <div className=''>
          <Formik
            initialValues={{ title: formData?.title || '', description: formData?.description || '' }}
            validationSchema={faqSchema}
            onSubmit={handleQuestion}
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <Input
                    label='Question *'
                    inputClassName='border-2'
                    name='title'
                    size='lg'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <ErrorMessage name='title' component='p' />

                  <input className='w-full border my-3' type='file' name />

                  {/* {values?.siteLogo ? (
                    <div className='flex items-center gap-3'>
                      <Image
                        src={values.siteLogo}
                        alt='Uploaded Image'
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-24 w-24 rounded-md border border-gray-200 object-contain p-1'
                      />
                      <button type='button' className='rounded bg-red-500 p-1' onClick={() => setFieldValue('siteLogo', '')}>
                        <FaTrashAlt className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
                      </button>
                    </div>
                  ) : (
                    <ImageDropzoneSingle
                      value={siteLogo}
                      onChange={(image: any) => setSiteLogo(image)}
                      className='mt-2'
                      size={1024 * 1000}
                      sizeText='1MB'
                    />
                  )} */}

                  <ErrorMessage name='description' component='p' />

                  <Button type='submit' size='lg' className='col-span-2 mt-2' onClick={() => handleQuestion}>
                    {formData.id ? 'Update' : 'Add'}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
}
