import { metaObject } from '@/config/site.config';
import { FaArrowLeft, FaRegBell } from 'react-icons/fa6';
import HomeSlider from '../components/HomeSlider';
import TopNavigation from '../components/TopNavigation';

export const metadata = {
  ...metaObject('Home'),
};

export default function Page() {
  return (
    <>
      <div className="w-full pb-5 ">
        <TopNavigation
          icon={<FaArrowLeft className="text-2xl" />}
          pageName="home"
          notification={<FaRegBell className="text-3xl font-medium" />}
        />
      </div>

      <div className="relative h-[240px] overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[url('/images/user_group.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-20 h-full">
          <form className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 sm:px-14">
            <input
              type="text"
              placeholder="Enter Quiz Code"
              className="w-full rounded-full py-[12px] text-center text-xl outline-none "
              style={{ boxShadow: 'none' }}
            />
            <button
              type="button"
              className="btn w-full max-w-48 rounded-full bg-white text-base text-[#0d6efd] hover:bg-[#f8f6f6] sm:max-w-60"
            >
              Join Quiz
            </button>
          </form>
        </div>
      </div>

      <HomeSlider />
    </>
  );
}
