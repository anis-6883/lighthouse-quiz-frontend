import { metaObject } from '@/config/site.config';
import { FaArrowLeft } from 'react-icons/fa6';
import EmptyCard from '../../components/EmptyCard';
import Notification from '../../components/Notification';
import TopNavigation from '../../components/TopNavigation';
export const metadata = {
  ...metaObject('Settings - Notifications'),
};

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 pt-4">
        <TopNavigation
          icon={<FaArrowLeft className="text-2xl" />}
          pageName="Notification"
          notification=""
        />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {/* if any faq not have  */}
        <EmptyCard name="notification" />

        <Notification
          title="test notification"
          body="It is a long established fact that a reader will be distracted "
          src="/images/Live_Quiz.png"
          time="20 minutes"
        />
        <Notification
          title="test notification"
          body="It is a long established fact that a reader will be distracted "
          src="/images/home_popup_img.jpg"
          time="20 minutes"
        />
        <Notification
          title="test notification"
          body="It is a long established fact that a reader will be distracted "
          src="/images/Live_Quiz.png"
          time="20 minutes"
        />
      </div>
    </>
  );
}
