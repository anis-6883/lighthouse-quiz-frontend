import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { routes } from '@/config/routes'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect(routes.dashboard)
  } else {
    redirect(routes.adminLogin)
  }
  return <div></div>
}
