import { Field } from 'formik';
import FormBlockWrapper from '../../components/FormBlockWrapper';

export default function AppVersionControlForm() {
  return (
    <div className="flex flex-col gap-10">
      <FormBlockWrapper title="App Links">
        <div className="grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-2">
          <Field name="iosAppLink">
            {({ field, meta }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">iOS App Link</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="androidAppLink">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android App Link
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
        </div>
      </FormBlockWrapper>

      <div className="my-2 border-b border-dashed border-slate-300"></div>

      <FormBlockWrapper title="Version Control (iOS)">
        <div className="grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-2">
          <Field name="iosVersionName">
            {({ field, meta }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    iOS Version Name
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="iosVersionCode">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    iOS Version Code
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="iosForceUpdate">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    iOS Force Update
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            )}
          </Field>

          <Field name="iosAppUrl">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">iOS App Url</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
          <Field name="iosButtonText">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    iOS Button Text
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
          <Field name="iosDescription">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    iOS Description
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
        </div>
      </FormBlockWrapper>

      <div className="my-2 border-b border-dashed border-slate-300"></div>

      <FormBlockWrapper title="Version Control (Android)">
        <div className="grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-2">
          <Field name="androidVersionName">
            {({ field, meta }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android Version Name
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="androidVersionCode">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android Version Code
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="androidForceUpdate">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android Force Update
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            )}
          </Field>

          <Field name="androidAppUrl">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android App Url
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
          <Field name="androidButtonText">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android Button Text
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
          <Field name="androidDescription">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Android Description
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>
        </div>
      </FormBlockWrapper>
    </div>
  );
}
