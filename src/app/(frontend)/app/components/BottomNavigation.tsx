'use client'
import { routes } from '@/config/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa6'
import { PiSquaresFourBold } from 'react-icons/pi'

export default function BottomNavigation() {
  const pathname = usePathname()
  const home = routes.appHome
  const history = routes.history
  const refer = routes.refer
  const settings = routes.settings.home

  return (
    <div className="fixed bottom-0 z-20 w-full bg-white md:w-[768px]">
      <ul className="m-auto flex h-16 items-center  justify-center gap-7 font-medium text-[#9e9e9e] sm:gap-20">
        <li>
          <Link
            href={routes.authHome}
            className={`${pathname === home ? 'active' : ''} flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black`}
          >
            <AiFillHome className="text-xl sm:text-2xl" />

            <span className="text-xs sm:text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={routes.history}
            className={`${pathname === history ? 'active' : ''} flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black`}
          >
            {/* <FaBorderAll className="text-2xl" /> */}
            <PiSquaresFourBold className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-base">History</span>
          </Link>
        </li>
        <li>
          <Link
            href={routes.dailyWord}
            className={`${pathname === routes.dailyWord ? 'active' : ''} flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black`}
          >
            {pathname === routes.dailyWord ? <img src="/images/bible-icon-2.png" alt="" /> : <img src="/images/bible-icon-1.png" alt="" />}
            <span className="text-xs sm:text-base">Daily Word</span>
          </Link>
        </li>
        <li>
          <Link
            href={routes.prayer}
            className={`${pathname === routes.prayer ? 'active' : ''} flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black`}
          >
            {/* <IoMdShare className="text-2xl " /> */}
            <img src="/images/prayer-icon.png" alt="" />
            <span className="text-xs sm:text-base">Prayer</span>
          </Link>
        </li>
        <li>
          <Link
            href={routes.settings.home}
            className={` ${pathname === settings ? 'active' : ''} flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:text-black`}
          >
            <FaRegUser className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-base">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
