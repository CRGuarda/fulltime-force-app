import { octokit } from '@/helpers/octokit'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const owner = searchParams.get('owner')

  try {
    if (!owner) {
      return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
    }
    const { data } = await octokit.request(`GET /users/${owner}`, {
      username: owner,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    console.log(data.login)

    return NextResponse.json([{ value: data.login, label: data.login }])
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 })
  }
}
