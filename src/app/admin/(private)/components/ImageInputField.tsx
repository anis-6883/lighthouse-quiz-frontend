import 'cropperjs/dist/cropper.css'
import { useFormikContext } from 'formik'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Cropper } from 'react-cropper'
import Dropzone from 'react-dropzone'
import toast from 'react-hot-toast'
import { RxCross2 } from 'react-icons/rx'

export default function ImageInputField({ label, name }: { label: string; name: string }) {
  const maxSize = 10 //MB

  const [preview, setPreview] = useState<any>()
  const cropperRef = useRef(null)
  const { values, setFieldValue }: any = useFormikContext()

  useEffect(() => {
    if (values.image) setPreview(values.image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(values)
  }, [values])

  const debouncedHandleCrop = debounce(() => {
    // const cropper = cropperRef.current?.cropper as Cropper
    // const croppedImage = cropper.getCroppedCanvas().toDataURL()
    // setFieldValue(name, croppedImage)
  }, 1000)

  const handleDrop = (files: any) => {
    const file = files[0]

    if (file.size < MBToBytes(maxSize)) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => setPreview(reader.result) // Converted selected image to base64 string
    } else {
      toast.error(`File size exceeds ${maxSize}MB limit`)
    }
  }

  return (
    <div className="flex flex-col">
      <fieldset className="rounded-md border-2 border-gray-300 p-3">
        <legend className="font-semibold">{label}</legend>

        <Dropzone onDrop={handleDrop} accept={{ 'image/*': [] }} multiple={false}>
          {({ getRootProps }) => {
            return (
              <div {...getRootProps()} className="cursor-pointer py-3">
                <Zone image={preview} />
              </div>
            )
          }}
        </Dropzone>

        {/* preview window */}
        {preview && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 ">
                <RxCross2 size={40} className="m-7 text-white opacity-100" />
              </div>

              <Cropper ref={cropperRef} src={preview} style={{ height: 'auto', width: '100%' }} dragMode="none" aspectRatio={1} cropmove={debouncedHandleCrop} />
            </div>
          </>
        )}
      </fieldset>
    </div>
  )
}

type props = { name?: string; image: string; setValue?: Function }

function Zone({ image }: props) {
  if (!image) {
    return (
      <div className="flex items-center justify-center gap-3">
        <img src="/images/upload.png" height={40} width={40} alt="upload" />

        <h3 className="mt-2 text-sm font-medium text-gray-900 ">
          <label htmlFor="file-upload" className="relative cursor-pointer">
            <span>Drag and drop or</span>
            <span className="text-primary"> browse</span>
            <span> to upload!</span>
          </label>
        </h3>
      </div>
    )
  }
}

const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: any[]) => {
    clearTimeout(timeoutId!) // Use ! to assert that timeoutId is not null
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

function getSizeInMB(base64String: string) {
  const base64Image = base64String.replace(/^data:image\/(png|jpeg|jpg);base64,/, '') // Remove data URL prefix
  const binaryString = atob(base64Image) // Convert base64 to binary data
  const bytes = binaryString.length // Get the length of the binary data in bytes
  const megabytes = bytes / (1024 * 1024) // Convert bytes to megabytes (1 megabyte = 1024 * 1024 bytes)
  return megabytes
}

const MBToBytes = (bytes: number) => {
  return bytes * 1000000
}
