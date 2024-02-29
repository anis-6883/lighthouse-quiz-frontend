/**
 * Makes a POST request to the given path with the given form data.
 * @param path the API endpoint to POST to
 * @param token the bearer token to authenticate with
 * @param formData the form data to send with the request
 * @param multipart whether the request body should be sent as multipart/form-data
 */

export default async function postData(path: string, token: string, formData: any, multipart?: boolean): Promise<any> {
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
    const response = await fetch(`${base}/api/${path}`, {
      method: 'POST',
      headers,
      body,
    })
    return await response.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
