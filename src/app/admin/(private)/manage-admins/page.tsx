import PageHeader from '@/app/shared/page-header'
import { routes } from '@/config/routes'
import { metaObject } from '@/config/site.config'
import getData from '@/utils/fetch/getData'
import Link from 'next/link'
import { HiPlus } from 'react-icons/hi2'
import PageContent from './components/PageContent'

const title = 'Manage Admins'
export const metadata = { ...metaObject(title) }

export default async function Page() {
	const data = await getData('admin')

	const pageHeader = {
		title,
		breadcrumb: [
			{ href: routes.dashboard, name: 'Dashboard' },
			{ name: title },
		],
	}

	return (
		<>
			<PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
			<PageContent data={data} />
		</>
	)
}
