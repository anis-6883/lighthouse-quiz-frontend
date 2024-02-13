import { Field } from 'formik';
import FormBlockWrapper from '../../components/FormBlockWrapper';

export default function SmsSettingsForm() {
  return (
    <div className="flex flex-col gap-10">
      <FormBlockWrapper title="Twilio">
        <div className="grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-3">
          <Field name="twilioAccountSID">
            {({ field, meta }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Account SID</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="twilioAuthToken">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Auth Token</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="twilioServiceId">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Service Id</span>
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

      <FormBlockWrapper title="Msg91">
        <div className="grid grid-cols-1 gap-4 gap-y-2 md:grid-cols-2">
          <Field name="msg91AuthKey">
            {({ field, meta }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Auth Key</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="msg91OtpToken">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Otp Token</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="msg91WidgetId">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Widget Id</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  {...field}
                />
              </label>
            )}
          </Field>

          <Field name="msg91OtpDefault">
            {({ field }: { field: any; meta: any }) => (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Otp Default</span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="0">Off</option>
                  <option value="1">On</option>
                </select>
              </label>
            )}
          </Field>
        </div>
      </FormBlockWrapper>
    </div>
  );
}
