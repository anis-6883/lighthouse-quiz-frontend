export default async function updateData(path: string, token: string, formData: any, id: string, multipart?: boolean) {
  const base = process.env.BASE ?? process.env.NEXT_PUBLIC_BASE
  const apiKey = process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY ?? ''

  const headers: Record<string, string> = {
    'x-api-key': apiKey,
    Authorization: `Bearer ${token}`,
  }

  let body
  if (multipart) {
    body = new FormData()
    for (const key in formData) body.append(key, formData[key])
  } else {
    body = JSON.stringify(formData)
    headers['Content-Type'] = 'application/json'
  }

  try {
    const response: any = await fetch(`${base}/api/admin/${path}/${id}`, { method: 'PUT', headers, body })
    return await response.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
