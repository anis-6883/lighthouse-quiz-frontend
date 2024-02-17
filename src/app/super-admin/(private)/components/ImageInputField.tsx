import 'cropperjs/dist/cropper.css';
import { useFormikContext } from 'formik';
import { createRef, useEffect, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import Dropzone from 'react-dropzone';
import { RxCross2 } from 'react-icons/rx';
import { Button } from 'rizzui';

export default function ImageInputField({ label, name }: { label: string; name: string }) {
  const maxSize = 2; //MB

  const [preview, setPreview] = useState<any>();
  const { values, setFieldValue, setFieldError }: any = useFormikContext();

  useEffect(() => {
    if (values?.image?.lastModified > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(values?.image);
      reader.onloadend = () => setPreview(reader.result); // Converted selected image to base64 string
      return;
    }

    if (values?.image !== '') {
      setPreview(values?.image);
    }
  }, [values?.image]);

  const handleDrop = (files: any) => {
    const file = files[0];

    if (file.size <= MBToBytes(2)) {
      setFieldValue(name, file);
    } else {
      setFieldError(name, `File size exceeds limit (${maxSize} MB)`);
    }
  };

  const [cropData, setCropData] = useState('#');
  const cropperRef = createRef<ReactCropperElement>();

  // const onChange = (e: any) => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result as any);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };

  const getCropData = (e) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      // let files;
      // if (e.dataTransfer) {
      //   files = e.dataTransfer.files;
      // } else if (e.target) {
      //   files = e.target.files;
      // }
      // const reader = new FileReader();
      // reader.onload = () => {
      //   setPreview(reader.result as any);
      // };
      // reader.readAsDataURL(files[0]);
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    console.log();
  };

  return (
    <div className='flex flex-col'>
      <Button style={{ float: 'right' }} onClick={getCropData}>
        Crop Image
      </Button>

      <fieldset className='border-2 border-gray-300 p-3 rounded-md my-3'>
        <legend>{label}</legend>

        <Dropzone onDrop={handleDrop} accept={{ 'image/*': [] }} multiple={false}>
          {({ getRootProps }) => {
            return (
              <div {...getRootProps()} className='cursor-pointer'>
                <Zone image={preview} />
              </div>
            );
          }}
        </Dropzone>

        {/* preview window */}
        {values?.image && (
          <>
            <div
              className='relative'
              onClick={() => {
                setFieldValue(name, null);
                setPreview(null);
              }}
            >
              <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100   transition-opacity duration-300 cursor-pointer bg-gray-500 bg-opacity-50 '>
                <RxCross2 size={40} className='opacity-100 m-7 text-white' />
              </div>

              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: '100%' }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview='.img-preview'
                src={preview}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                guides={true}
              />
            </div>
          </>
        )}
      </fieldset>
    </div>
  );
}

type props = { name?: string; image: string; setValue?: Function };

function Zone({ image }: props) {
  if (!image) {
    return (
      <div className='flex justify-center items-center gap-3'>
        <img src='/images/upload.png' height={40} width={40} alt='upload' />

        <h3 className='mt-2 text-sm font-medium text-gray-900 '>
          <label htmlFor='file-upload' className='relative cursor-pointer'>
            <span>Drag and drop or</span>
            <span className='text-primary'> browse</span>
            <span> to upload!</span>
          </label>
        </h3>
      </div>
    );
  }
}

const MBToBytes = (bytes: number) => {
  return bytes * 1000000;
};
