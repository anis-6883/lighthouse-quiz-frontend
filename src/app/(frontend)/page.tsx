import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import WelcomeSlider from './components/WelcomeSlider';

export const metadata = {
  ...metaObject('Home Page'),
};

export default function Page() {
  return (
    <main className="bg-[#EBF5FB] ">
      <div className="m-auto min-h-screen w-full max-w-3xl overflow-hidden bg-[#ffffff] p-8">
        <div className="flex flex-col justify-center gap-5">
          <div className="mb-5">
            <WelcomeSlider />
          </div>
          <Link
            className="mx-auto inline-block w-full max-w-lg"
            href={routes.register}
          >
            <button
              type="button"
              className="w-full rounded-full border-b-[5px] border-b-[#543ACC] bg-[#6949ff] py-4 text-base font-semibold uppercase text-white hover:bg-[#6a49ffd0]"
            >
              Register
            </button>
          </Link>
          <Link
            className="mx-auto inline-block w-full max-w-lg"
            href={routes.signIn}
          >
            <button
              type="button"
              className=" w-full rounded-full border-b-[5px] border-b-[#C3B6FF] bg-[#F0EDFF] py-4 text-base font-semibold uppercase text-[#6949ff] "
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
