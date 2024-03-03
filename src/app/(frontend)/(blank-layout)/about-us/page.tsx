import { metaObject } from '@/config/site.config';
import GeneralNav from '../../components/GeneralNav';

export const metadata = {
  ...metaObject('About Us'),
};

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto min-h-screen max-w-3xl place-items-center overflow-hidden bg-[#ffffff] px-6 sm:px-10">
        <GeneralNav />
        <div className="w-full pb-4 pt-2">
          Lighthouse Quiz - Learn it; Live it; Share it At Lighthouse Quiz, we
          Lighthouse Quiz - Learn it; Live it; Share it At Lighthouse Quiz, we
          believe that The Bible is the written Word of God, inspired by The
          beacons of His light in a world that so desperately needs it.
        </div>
      </div>
    </main>
  );
}
