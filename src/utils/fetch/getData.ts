export default async function getData(path: string) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE;

  try {
    let response: any = await fetch(`${base}/api/admin/${path}`, {
      headers: { 'x-api-key': process.env.API_KEY } as HeadersInit,
      cache: 'no-store',
      next: { tags: [path] }
    });
    response = await response.json();

    if (response.status) return response.data;
    else throw new Error(`${base}/api/admin/${path}: ${response.message}`);
  } catch (e) {
    console.error(e);
    return [];
  }
}
