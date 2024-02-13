import ImageDropzoneSingle from '@/components/image-dropzone-single';
import { Field } from 'formik';
import { FaTrashAlt } from 'react-icons/fa';
import FormBlockWrapper from '../../components/FormBlockWrapper';

export default function PopUpBannerSettings({
  values,
  setFieldValue,
  bannerImage,
  setBannerImage,
}: {
  values: any;
  setFieldValue: any;
  bannerImage: any;
  setBannerImage: any;
}) {
  return (
    <FormBlockWrapper title="Pop Up Banner Settings">
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-3">
        <Field name="appLink">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">App Link</span>
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full ${
                    meta.touched && meta.error && 'input-error'
                  }`}
                  {...field}
                />
              </label>
            </>
          )}
        </Field>
        <Field name="refreshNumber">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Refresh Times Number
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="1">1 time refresh</option>
                  <option value="2">2 time refresh</option>
                  <option value="3">3 time refresh</option>
                  <option value="4">4 time refresh</option>
                  <option value="5">5 time refresh</option>
                </select>
              </label>
            </>
          )}
        </Field>
        <Field name="runningStatus">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Running Status
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="0">Off</option>
                  <option value="1">On</option>
                </select>
              </label>
            </>
          )}
        </Field>
      </div>

      <div className="w-full">
        <div className="mb-2">
          <span className="label-text font-semibold">
            Pop-Up Banner Image (Ratio: 9:16)
          </span>
        </div>
        {values?.site_logo ? (
          <div className="flex items-center gap-3">
            <img
              src={values.site_logo}
              alt="Uploaded Image"
              className="h-24 w-24 rounded-md border border-gray-200 object-contain p-1"
            />
            <button
              type="button"
              className="rounded bg-red-500 p-1"
              onClick={() => setFieldValue('site_logo', '')}
            >
              <FaTrashAlt className="hover:fill-secondary-400 h-5 w-5 fill-white transition-colors" />
            </button>
          </div>
        ) : (
          <ImageDropzoneSingle
            value={bannerImage}
            onChange={(image: any) => setBannerImage(image)}
            className="mt-2"
            size={1024 * 1000}
            sizeText="1MB"
          />
        )}
      </div>
    </FormBlockWrapper>
  );
}
