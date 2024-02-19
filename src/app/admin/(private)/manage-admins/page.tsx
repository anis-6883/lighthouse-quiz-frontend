import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi2';

const pageHeader = {
  title: 'Manage Admins',
  breadcrumb: [
    {
      href: routes.dashboard,
      name: 'Dashboard',
    },
    {
      name: 'Manage Admins',
    },
  ],
};

export const metadata = {
  ...metaObject('Manage Admins'),
};

export default function Page() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.manageAdmins.create}
          className="btn btn-primary btn-sm text-white"
        >
          <HiPlus className="text-lg" /> Add New Admin
        </Link>
      </PageHeader>
      {/* <ManageAdminsIndex /> */}
    </>
  );
}
