import postData from './fetch/postData'

export default async function getNewToken(token: any) {
  try {
    let response: any = await postData('update-token', '', token)

    if (response.status) return response.data
    else throw new Error(response.message)
  } catch (error) {
    console.error('Something went wrong on refresh token!')
  }
}
