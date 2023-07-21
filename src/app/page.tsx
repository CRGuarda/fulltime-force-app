import { Commit, Main } from '@/app/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'

export default async function Home() {
  const {
    login,
    avatar_url,
    html_url,
    commitResponse,
  }: { login: string; commitResponse: Main[]; avatar_url: string; html_url: string } = await getCommits()

  return (
    <>
      <main className='m-16'>
        <h2 className='text-center text-4xl'>
          Bienvenid@,
          <a className='font-bold underline	' href={html_url} target='_blank' rel='noopener'>
            {login}
          </a>
        </h2>
        <section className='grid justify-center gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] m-16'>
          {commitResponse.map(({ sha, commit, html_url }) => {
            return (
              <a
                key={sha}
                href={html_url}
                target='_blank'
                rel='noopener'
                className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
              >
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {commit.message}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                  order.
                </p>
              </a>
            )
          })}
        </section>
      </main>
    </>
  )
}
