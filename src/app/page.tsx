import { Commit, Main } from '@/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'
import { CommitCard } from '@/components/commitCard'

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
        {commitResponse.map(({ sha, commit, html_url }) => (
          <CommitCard key={sha} commit={commit} html_url={html_url} />
        ))}
      </section>
    </main>
  )
}
