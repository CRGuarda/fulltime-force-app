import { headers } from 'next/headers'

export async function getCommits() {
  try {
    const host = headers().get('host')
    const protocol = process.env.NODE_ENV !== 'development' ? 'https' : 'http'
    const res = await fetch(`${protocol}://${host}/api/commits`, { cache: 'no-store' })
    const resToJSON = await res.json()
    if (!res.ok) {
      throw new Error(resToJSON.error)
    }
    return resToJSON
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { error: error.message }
    }
  }
}
