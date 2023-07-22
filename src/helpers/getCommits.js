import { headers } from 'next/headers'

export async function getCommits() {
  const host = headers().get('host')
  const protocol = process.env.NODE_ENV !== 'development' ? 'https' : 'http'
  const res = await fetch(`${protocol}://${host}/api/commits`, { next: { revalidate: 15 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
