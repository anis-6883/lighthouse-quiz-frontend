import { routes } from '@/config/routes';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaBorderAll, FaRegUser, FaShareNodes } from 'react-icons/fa6';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 w-[768px] bg-white">
      <ul className="m-auto flex h-16 items-center  justify-center  gap-10 font-medium text-[#9e9e9e] sm:gap-20">
        <li>
          <Link
            href={routes.authHome}
            className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black"
          >
            <AiFillHome className="text-2xl " />
            <span className="text-sm sm:text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/history"
            className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black"
          >
            <FaBorderAll className="text-2xl " />
            <span className="text-sm sm:text-base">History</span>
          </Link>
        </li>
        <li>
          <Link
            href="/refer"
            className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black"
          >
            <FaShareNodes className="text-2xl " />
            <span className="text-sm sm:text-base">Refer</span>
          </Link>
        </li>
        <li>
          <Link
            href={routes.settings.home}
            className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black"
          >
            <FaRegUser className="text-2xl " />
            <span className="text-sm sm:text-base">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
