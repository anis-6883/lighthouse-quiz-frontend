import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import DataTable from './components/DataTable';
import getData from '@/utils/fetch/getData';
import PageContent from './components/PageContent';

const pageHeader = {
  title: 'FAQs',
  breadcrumb: [
    {
      href: routes.dashboard,
      name: 'Dashboard',
    },
    {
      name: 'FAQs',
    },
  ],
};

export const metadata = {
  ...metaObject('FAQs'),
};

export default async function Page() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <PageContent />
    </>
  );
}
