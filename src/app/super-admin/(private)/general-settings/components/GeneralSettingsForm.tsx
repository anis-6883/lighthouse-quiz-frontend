import timeZoneData from '@/utils/get-timezone-list';
import { Field } from 'formik';
import Select from 'react-select';
import FormBlockWrapper from '../../components/FormBlockWrapper';

export default function GeneralSettingsForm({
  setFieldValue,
  values,
}: {
  setFieldValue: any;
  values: any;
}) {
  return (
    <FormBlockWrapper title="Main Information">
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-3">
        <Field name="companyName">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Company Name{' '}
                    <span className="text-red-600">
                      {meta.touched && meta.error && (
                        <span>({meta.error})</span>
                      )}
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            </>
          )}
        </Field>

        <Field name="siteTitle">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Site Title{' '}
                    <span className="text-red-600">
                      {meta.touched && meta.error && (
                        <span>({meta.error})</span>
                      )}
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            </>
          )}
        </Field>

        <Field name="timezone">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Time Zone{' '}
                    <span className="text-red-600">
                      {meta.touched && meta.error && <span>(Required!)</span>}
                    </span>
                  </span>
                </div>
                <Select
                  id="type"
                  placeholder="Select an option"
                  options={timeZoneData}
                  onChange={(timezoneOption) => {
                    setFieldValue('timezone', timezoneOption);
                  }}
                  value={values?.timezone}
                />
              </label>
            </>
          )}
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
        <Field name="appInReview">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    App In Review?
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            </>
          )}
        </Field>

        <Field name="contactEmail">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Contact Email{' '}
                    <span className="text-red-600">
                      {meta.touched && meta.error && (
                        <span>({meta.error})</span>
                      )}
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            </>
          )}
        </Field>
      </div>
    </FormBlockWrapper>
  );
}
