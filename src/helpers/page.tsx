import { Commit, Main } from '@/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'

export default async function Home() {
  const {
    login,
    avatar_url,
    html_url,
    commitResponse,
  }: { login: string; commitResponse: Main[]; avatar_url: string; html_url: string } = await getCommits()

  return (
    <main className='m-16'>
      <h2 className='text-center text-4xl'>
        Welcome,
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
              className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between'
            >
              <div className='grid grid-cols-[10%,1fr]'>
                <svg
                  aria-hidden='true'
                  height='16'
                  viewBox='0 0 16 16'
                  version='1.1'
                  width='16'
                  data-view-component='true'
                  className='fill-current justify-self-center mt-2'
                >
                  <path d='M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z'></path>
                </svg>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {commit.message}
                </h5>
              </div>
              <div className='font-normal text-gray-700 dark:text-gray-400 flex'>
                <svg
                  aria-hidden='true'
                  height='16'
                  viewBox='0 0 16 16'
                  version='1.1'
                  width='16'
                  data-view-component='true'
                  className='fill-current justify-self-center mt-1 mr-2'
                >
                  <path d='M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z'></path>
                </svg>
                <p>
                  <>{commit.author.date.slice(0, -10)}</>
                </p>
              </div>
            </a>
          )
        })}
      </section>
    </main>
  )
}
