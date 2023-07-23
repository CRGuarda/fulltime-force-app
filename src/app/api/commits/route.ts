import { octokit } from '@/helpers/octokit'
import { Commit } from '@/interfaces/types.dto'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const owner = searchParams.get('owner') || 'CRGuarda'
  const repo = searchParams.get('repo') || 'fulltime-force-app'
  try {
    const {
      data: { login, avatar_url, html_url },
    } = await octokit.rest.users.getAuthenticated()

    const { data } = await octokit.request(`GET /repos/${owner}/${repo}/commits?per_page=25&page=1`, {
      owner: 'CRGuarda',
      repo: 'fulltime-force-app',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    const commitResponse = data?.map(({ sha, commit, html_url }: { sha: string; commit: Commit; html_url: string }) => {
      return { sha, commit, html_url }
    })
    return NextResponse.json({ login, avatar_url, html_url, commitResponse })
  } catch (error) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage = error.message
      console.log(errorMessage)
      return NextResponse.json({ error: error.message }, { status: 404 })
    }
    console.log(errorMessage)
  }
}
