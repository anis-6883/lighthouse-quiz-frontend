export default async function updateData(path: string, formData: any, id: string) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE;

  try {
    const response: any = await fetch(`${base}/api/admin/${path}/${id}`, {
      headers: {
        'x-api-key': process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY,
        'Content-Type': 'application/json'
      } as HeadersInit,

      method: 'PUT',
      body: JSON.stringify(formData)
    });

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
