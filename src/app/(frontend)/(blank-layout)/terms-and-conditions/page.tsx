import { metaObject } from '@/config/site.config';
import GeneralNav from '../../components/GeneralNav';

export const metadata = {
  ...metaObject('Terms & Conditions'),
};

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto min-h-screen max-w-3xl place-items-center overflow-hidden bg-[#ffffff] px-6 sm:px-10">
        <GeneralNav />
        <div className="w-full pb-4 pt-2">
          Lighthouse Quiz - Terms & Conditions
        </div>
      </div>
    </main>
  );
}
