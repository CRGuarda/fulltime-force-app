import { octokit } from '@/helpers/octokit'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const owner = searchParams.get('owner') || 'CRGuarda'

  try {
    if (!owner) {
      return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
    }
    const { data } = await octokit.request(`GET /users/${owner}/repos?per_page=45`, {
      username: owner,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    const repoResponse = data.map(({ name }: { name: string }) => {
      return { value: name, label: name }
    })
    return NextResponse.json(repoResponse)
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 })
  }
}
