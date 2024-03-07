import PageHeader from '@/app/shared/page-header'
import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import getData from '@/utils/fetch/getData'
import PageContent from './PageContent'

const title = 'Daily Quiz'

export const metadata = { ...metaObject(title) }

export default async function Page({ params }: { params: { id: string } }) {
  const data: any = await getData('daily-quiz/find-quiz/' + params.id)

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
