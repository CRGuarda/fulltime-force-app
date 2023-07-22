import { octokit } from '@/helpers/octokit'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log(request)
  /* const data = octokit.request('GET /users/{username}', {
    username: 'USERNAME',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }) */

  return NextResponse.json({ hola: 'hola' })
}
