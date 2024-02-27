import PageHeader from '@/app/shared/page-header'
import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import getData from '@/utils/fetch/getData'
import PageContent from './components/PageContent'

const title = 'Frequently Asked Questions'
export const metadata = { ...metaObject(title) }

export default async function Page() {
  const data: any = await getData('faq')

  const pageHeader = {
    title,
    breadcrumb: [{ href: routes.dashboard, name: 'Dashboard' }, { name: title }],
  }

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <PageContent data={data} />
    </>
  )
}
