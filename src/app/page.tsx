import { Commit, Main } from '@/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'
import { CommitCard } from '@/components/CommitCard'
import { Welcome } from '@/components/Welcome'
import { ListOfValue } from '@/components/ListOfValue'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fulltime Force App',
  description: 'App to view the commits of a public github repository builded on NextJS',
}

export default async function Home() {
  const {
    error,
    login,
    avatar_url,
    html_url,
    commitResponse,
  }: { login: string; commitResponse: Main[]; avatar_url: string; html_url: string; error: string } = await getCommits()

  if (error)
    return (
      <main>
        <div className='m-16 p-8 rounded-full bg-gray-600 text-2xl text-center font-bold text-indigo-400 md:text-8xl'>
          {error}
        </div>
        <p className='bg-amber-400 m-4 text-center font-bold text-xl md:text-3xl'>
          Please check the name of the owner and repository. Check if repository is public
        </p>
      </main>
    )
  return (
    <main className='m-16'>
      <Welcome login={login} html_url={html_url} />
      <ListOfValue label='Github username' placeholder='CRGuarda' />
      <section className='grid justify-center gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] m-16'>
        {commitResponse.map(({ sha, commit, html_url }) => (
          <CommitCard key={sha} commit={commit} html_url={html_url} />
        ))}
      </section>
    </main>
  )
}
