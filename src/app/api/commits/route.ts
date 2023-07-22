import { Commit } from '@/interfaces/types.dto'
import { NextResponse } from 'next/server'
import { Octokit, App } from 'octokit'

const octokit = new Octokit({ auth: process.env.API_TOKEN })

export async function GET(request: Request) {
  try {
    const {
      data: { login, avatar_url, html_url },
    } = await octokit.rest.users.getAuthenticated()

    const { data } = await octokit.request('GET /repos/JorgePasco1/advent-of-code-2022/commits', {
      owner: 'JorgePasco1',
      repo: 'advent-of-code-2022',
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
