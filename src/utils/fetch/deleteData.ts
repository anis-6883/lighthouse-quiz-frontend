export default async function deleteData(path: string, token: string, id: string) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE

  try {
    let response: any = await fetch(`${base}/api/admin/${path}/${id}`, {
      headers: {
        'x-api-key': process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${token}`,
      } as HeadersInit,
      method: 'DELETE',
    })

    return await response.json()
  } catch (e) {
    console.error(e)
  }
}
