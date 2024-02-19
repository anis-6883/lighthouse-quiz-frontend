import { metaObject } from '@/config/site.config';
import { FaArrowLeft, FaRegBell } from 'react-icons/fa6';
import TopNavigation from '../components/TopNavigation';

export const metadata = {
  ...metaObject('Home'),
};

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation
          icon={<FaArrowLeft className="text-2xl" />}
          pageName="home"
          notification={<FaRegBell className="text-3xl font-medium" />}
        />
      </div>
      <div>Home</div>
    </>
  );
}
