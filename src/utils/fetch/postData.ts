export default async function getData(path: string, formData: any) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE;

  try {
    const response: any = await fetch(`${base}/api/admin/${path}`, {
      headers: {
        'x-api-key': process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY,
        'Content-Type': 'application/json'
      } as HeadersInit,

      method: 'POST',
      body: JSON.stringify(formData)
    });

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
