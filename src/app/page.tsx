'use client'
import { Commit, Main } from '@/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'
import { CommitCard } from '@/components/CommitCard'
import { Welcome } from '@/components/Welcome'
import { ListOfValue } from '@/components/ListOfValue'
import { useState, useEffect } from 'react'
import { useCommit } from '@/helpers/useCommit'
import { Loading } from '@/components/Loading'

export default function Home() {
  const [credentials, setCredentials] = useState({ owner: 'CRGuarda', repo: 'fulltime-force-app' })
  const { isLoading, data, error } = useCommit(credentials)

  if (!isLoading && error)
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
      {<Welcome login={data.login} html_url={data.html_url} />}
      <ListOfValue setCredentials={setCredentials} />
      <h3 className='text-2xl p-4'>Commits for {credentials.repo} repo</h3>
      {isLoading && <Loading />}
      <section className='grid justify-center gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mx-16 my-6'>
        {data?.commitResponse?.map(({ sha, commit, html_url }: { sha: string; commit: Commit; html_url: string }) => (
          <CommitCard key={sha} commit={commit} html_url={html_url} />
        ))}
      </section>
    </main>
  )
}
