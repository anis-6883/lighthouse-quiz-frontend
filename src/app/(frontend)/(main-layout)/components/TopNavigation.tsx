'use client';
import { routes } from '@/config/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TopNavigation({
  icon = '',
  pageName = '',
  notification = '',
}: {
  icon?: any;
  pageName: string;
  notification?: any;
}) {
  const router = useRouter();

  return (
    <>
      <ul className="flex items-center justify-between bg-[#fff] font-medium ">
        <li>
          {pageName != 'home' ? (
            <h2 className="flex items-center gap-2 text-[22px] font-semibold capitalize text-[var(--text-color)]">
              {icon != ' ' ? (
                <button type="button" onClick={() => router.back()}>
                  {icon}
                </button>
              ) : (
                icon
              )}
              {pageName}
            </h2>
          ) : (
            <img
              className="h-[55px] w-[60px]"
              src="/images/logo.png"
              alt="bible quiz logo"
            />
          )}
        </li>
        <Link href={routes.settings.notification}>{notification}</Link>
      </ul>
    </>
  );
}
