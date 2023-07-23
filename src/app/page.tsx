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

  return (
    <main className='m-16'>
      {<Welcome login={data.login} html_url={data.html_url} />}
      <ListOfValue setCredentials={setCredentials} />
      <h3 className='text-2xl p-4'>
        Commits for <span className='underline'>{credentials.repo}</span>
      </h3>
      {isLoading && <Loading />}
      {!error ? (
        <section className='grid justify-center gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mx-16 my-6'>
          {data?.commitResponse?.map(({ sha, commit, html_url }: { sha: string; commit: Commit; html_url: string }) => {
            return <CommitCard key={sha} commit={commit} html_url={html_url} />
          })}
        </section>
      ) : (
        <h3 className='bg-amber-600 text-2xl text-center'>Please, verify the name of the public repo</h3>
      )}
    </main>
  )
}
