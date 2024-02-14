export default async function deleteData(path: string, id: string) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE;

  try {
    let response: any = await fetch(`${base}/api/admin/${path}/${id}`, {
      headers: {
        'x-api-key': process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY,
      } as HeadersInit,
      method: 'DELETE',
      cache: 'no-store',
    });

    response = await response.json();

    if (response) return response;
  } catch (e) {
    console.error(e);
  }
}
