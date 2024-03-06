import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { getServerSession } from 'next-auth'
/**
 * Fetches data from the API endpoint.
 * @param path - The API endpoint path.
 * @returns The data from the API or an empty array if the request fails.
 */

export default async function getData(path: string, route: string = 'admin'): Promise<any[]> {
  const session = await getServerSession(authOptions)
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE
  // console.log(session)

  const url = route === 'admin' ? `${base}/api/admin/${path}` : `${base}/api/${path}`

  try {
    let response: any = await fetch(url, {
      headers: {
        'x-api-key': process.env.API_KEY,
        Authorization: `Bearer ${session?.accessToken}`,
      } as HeadersInit,
      cache: 'no-store',
      next: { tags: [path] },
    })

    response = await response.json()
    // console.log(response)

    if (response.status) {
      return response.data
    } else {
      // console.log(response)
      throw new Error(`${url}: ${response.message}`)
    }
  } catch (e) {
    console.error(e)
    return []
  }
}
