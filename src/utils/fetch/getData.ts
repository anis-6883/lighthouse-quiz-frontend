import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { getServerSession } from 'next-auth'

/**
 * Fetches data from the API endpoint.
 * @param path - The API endpoint path.
 * @returns The data from the API or an empty array if the request fails.
 */

export default async function getData(path: string): Promise<any[]> {
  const session = await getServerSession(authOptions)
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE

  try {
    let response: any = await fetch(`${base}/api/admin/${path}`, {
      headers: {
        'x-api-key': process.env.API_KEY,
        Authorization: `Bearer ${session?.user?.accessToken}`,
      } as HeadersInit,
      cache: 'no-store',
      next: { tags: [path] },
    })
    response = await response.json()

    if (response.status) {
      return response.data
    } else {
      throw new Error(`${base}/api/admin/${path}: ${response.message}`)
    }
  } catch (e) {
    console.error(e)
    return []
  }
}
