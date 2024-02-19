import { Field } from 'formik';
import FormBlockWrapper from '../../components/FormBlockWrapper';

export default function NotificationSettingsForm({ values }: { values: any }) {
  return (
    <FormBlockWrapper title="Notification Settings">
      <div className="grid grid-cols-1 gap-x-4 gap-y-2">
        <Field name="notificationType">
          {({ field, meta }: { field: any; meta: any }) => (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Notification Type
                  </span>
                </div>
                <select className="select select-bordered w-full" {...field}>
                  <option value="fcm">FCM</option>
                  <option value="one-signal">One Signal</option>
                </select>
              </label>
            </>
          )}
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
        {values.notificationType === 'fcm' && (
          <>
            <Field name="firebaseServerKey">
              {({ field, meta }: { field: any; meta: any }) => (
                <>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        Firebase Server Key
                      </span>
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
            <Field name="firebaseTopics">
              {({ field, meta }: { field: any; meta: any }) => (
                <>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        Firebase Topics
                      </span>
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
          </>
        )}

        {values.notificationType === 'one-signal' && (
          <>
            <Field name="oneSignalAppId">
              {({ field, meta }: { field: any; meta: any }) => (
                <>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        One Signal App Id
                      </span>
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
            <Field name="oneSignalApiKey">
              {({ field, meta }: { field: any; meta: any }) => (
                <>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text font-semibold">
                        One Signal Api Key
                      </span>
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
          </>
        )}
      </div>
    </FormBlockWrapper>
  );
}
