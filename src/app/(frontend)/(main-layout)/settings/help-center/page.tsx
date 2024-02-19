import { metaObject } from '@/config/site.config';

import { FaArrowLeft, FaRegBell } from 'react-icons/fa6';
import HelpCenterTab from '../../components/HelpCenterTab';
import TopNavigation from '../../components/TopNavigation';
import getData from '@/utils/fetch/getData';
export const metadata = {
  ...metaObject('Settings - Help Center')
};

export type FAQ = {
  title: string;
  description: string;
};

export default async function Page() {
  const faq: FAQ = await getData('faq');

  return (
    <>
      <div className='w-full pb-5 pt-4'>
        <TopNavigation
          icon={<FaArrowLeft className='text-2xl' />}
          pageName='help center'
          notification={<FaRegBell className='text-3xl font-medium' />}
        />
      </div>

      <HelpCenterTab faq={faq} />
    </>
  );
}
