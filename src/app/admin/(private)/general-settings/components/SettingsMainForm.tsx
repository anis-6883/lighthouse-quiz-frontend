'use client';

import { useGetGeneralSettingsQuery, useUpdateGeneralSettingsMutation } from '@/features/admin/general-settings/generalSettingsApi';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiCheckCircle } from 'react-icons/fi';
import { PiSpinnerLight } from 'react-icons/pi';
import * as Yup from 'yup';
import AboutUsForm from './AboutUsForm';
import AppVersionControlForm from './AppVersionControlForm';
import CloudinaryForm from './CloudinaryForm';
import GeneralSettingsForm from './GeneralSettingsForm';
import LogoAndIconForm from './LogoAndIconForm';
import NotificationSettingsForm from './NotificationSettingsForm';
import PopUpBannerSettings from './PopUpBannerSettings';
import PrivacyAndPolicyForm from './PrivacyAndPolicyForm';
import SmsSettingsForm from './SmsSettingsForm';
import TabButtonItem from './TabButtonItem';
import TermsAndConditionForm from './TermsAndConditionForm';

export default function SettingsMainForm() {
  const { data: generalSetting, isLoading, isError } = useGetGeneralSettingsQuery(undefined);

  const [updateSettings, { data: updatedData, isSuccess, isError: updatingError }] = useUpdateGeneralSettingsMutation();

  const [currentTab, setCurrentTab] = useState(0);
  const [siteLogo, setSiteLogo] = useState(null);
  const [siteIcon, setSiteIcon] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [initialValues, setInitialValues] = useState({
    companyName: '',
    siteTitle: '',
    timezone: {},
    appInReview: '1',
    contactEmail: '',
    siteLogo: '',
    siteIcon: '',
    bannerImage: '',
    terms: '',
    policy: '',
    aboutUs: '',

    twilioAccountSID: '',
    twilioAuthToken: '',
    twilioServiceId: '',
    msg91AuthKey: '',
    msg91OtpToken: '',
    msg91WidgetId: '',
    msg91OtpDefault: '0',

    cloudinaryRootFolderName: '',
    cloudinaryCloudName: '',
    cloudinaryApiKey: '',
    cloudinaryAppSecret: '',

    notificationType: 'fcm',
    firebaseServerKey: '',
    firebaseTopics: '',
    oneSignalAppId: '',
    oneSignalApiKey: '',

    iosAppLink: '',
    androidAppLink: '',
    iosVersionName: '',
    iosVersionCode: '',
    iosForceUpdate: '1',
    iosAppUrl: '',
    iosButtonText: '',
    iosDescription: '',
    androidVersionName: '',
    androidVersionCode: '',
    androidForceUpdate: '1',
    androidAppUrl: '',
    androidButtonText: '',
    androidDescription: '',

    appLink: '',
    refreshNumber: '5',
    runningStatus: '0'
  });

  useEffect(() => {
    if (updatingError) {
      setIsSubmitting(false);
      toast.error('Something went wrong!');
    }

    if (isSuccess) {
      setSiteLogo(null);
      setSiteIcon(null);
      setIsSubmitting(false);
      setInitialValues((prevValues) => ({
        ...prevValues,
        ...(updatedData as { data: any }).data
      }));
      toast.success('General Setting Updated Successfully!');
    }
  }, [isSuccess, updatedData, updatingError]);

  useEffect(() => {
    if (!isLoading && !isError) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        ...generalSetting?.data
      }));
    }
  }, [generalSetting, isError, isLoading]);

  const tabs = [
    'General Settings',
    'SMS Settings',
    'Notification Settings',
    'Cloudinary Settings',
    'App Version Control',
    'Pop Up Banner Settings',
    'Logo & Icon',
    'Terms and Condition',
    'Privacy and Policy',
    'About Us'
  ];

  const handleTabChange = (tab: number) => {
    setCurrentTab(tab);
  };

  const validationSchema = Yup.object().shape({
    // companyName: Yup.string().required('Required!'),
    // siteTitle: Yup.string().required('Required!'),
    contactEmail: Yup.string().email('Invalid Email!')
    // timezone: Yup.object().shape({
    //   label: Yup.string().required('Required!'),
    //   value: Yup.string().required('Required!'),
    // }),
  });

  // Submit Handler
  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);

    var formBody = new FormData();

    const fieldsToAppend = [
      'companyName',
      'siteTitle',
      'timezone',
      'appInReview',
      'contactEmail',
      'siteLogo',
      'siteIcon',
      'bannerImage',
      'terms',
      'policy',
      'aboutUs',

      'twilioAccountSID',
      'twilioAuthToken',
      'twilioServiceId',
      'msg91AuthKey',
      'msg91OtpToken',
      'msg91WidgetId',
      'msg91OtpDefault',

      'cloudinaryRootFolderName',
      'cloudinaryCloudName',
      'cloudinaryApiKey',
      'cloudinaryAppSecret',

      'notificationType',
      'firebaseServerKey',
      'firebaseTopics',
      'oneSignalAppId',
      'oneSignalApiKey',

      'iosAppLink',
      'androidAppLink',
      'iosVersionName',
      'iosVersionCode',
      'iosForceUpdate',
      'iosAppUrl',
      'iosButtonText',
      'iosDescription',
      'androidVersionName',
      'androidVersionCode',
      'androidForceUpdate',
      'androidAppUrl',
      'androidButtonText',
      'androidDescription',

      'appLink',
      'refreshNumber',
      'runningStatus'
    ];

    fieldsToAppend.forEach((field) => {
      if (values[field] !== undefined) {
        if (field === 'timezone') {
          formBody.append(field, JSON.stringify(values[field]));
        } else {
          formBody.append(field, values[field]);
        }
      }
    });

    if (siteLogo) formBody.append('siteLogo', siteLogo);
    if (siteIcon) formBody.append('siteIcon', siteIcon);
    if (bannerImage) formBody.append('bannerImage', bannerImage);

    updateSettings(formBody);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
              <div className='col-span-1 flex flex-col md:col-span-3'>
                {tabs.map((tab, index) => (
                  <TabButtonItem key={index} tab={tab} onClick={() => handleTabChange(index)} active={currentTab === index} />
                ))}
              </div>
              <div className='col-span-1 w-full rounded-lg border border-gray-200 bg-white p-5 shadow md:col-span-9'>
                <div hidden={currentTab === 0 ? false : true}>
                  <GeneralSettingsForm setFieldValue={setFieldValue} values={values} />
                </div>

                <div hidden={currentTab === 1 ? false : true}>
                  <SmsSettingsForm />
                </div>

                <div hidden={currentTab === 2 ? false : true}>
                  <NotificationSettingsForm values={values} />
                </div>

                <div hidden={currentTab === 3 ? false : true}>
                  <CloudinaryForm />
                </div>

                <div hidden={currentTab === 4 ? false : true}>
                  <AppVersionControlForm />
                </div>

                <div hidden={currentTab === 5 ? false : true}>
                  <PopUpBannerSettings setFieldValue={setFieldValue} values={values} bannerImage={bannerImage} setBannerImage={setBannerImage} />
                </div>

                <div hidden={currentTab === 6 ? false : true}>
                  <LogoAndIconForm
                    values={values}
                    setFieldValue={setFieldValue}
                    setSiteIcon={setSiteIcon}
                    siteIcon={siteIcon}
                    setSiteLogo={setSiteLogo}
                    siteLogo={siteLogo}
                  />
                </div>

                <div hidden={currentTab === 7 ? false : true}>
                  <TermsAndConditionForm values={values} setFieldValue={setFieldValue} />
                </div>

                <div hidden={currentTab === 8 ? false : true}>
                  <PrivacyAndPolicyForm values={values} setFieldValue={setFieldValue} />
                </div>

                <div hidden={currentTab === 9 ? false : true}>
                  <AboutUsForm values={values} setFieldValue={setFieldValue} />
                </div>
              </div>
            </div>
            <div className='flex w-full justify-end'>
              <button type='submit' className='btn btn-primary btn-sm mt-6 text-white' disabled={isSubmitting}>
                Submit {isSubmitting ? <PiSpinnerLight className='ml-1 animate-spin' /> : <FiCheckCircle className='ml-1' />}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
