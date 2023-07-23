'use client'
import { Commit, Main } from '@/interfaces/types.dto'
import { getCommits } from '@/helpers/getCommits'
import { CommitCard } from '@/components/CommitCard'
import { Welcome } from '@/components/Welcome'
import { ListOfValue } from '@/components/ListOfValue'
import { useState, useEffect } from 'react'
import { useCommit } from '@/helpers/useCommit'
import { Loading } from '@/components/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home() {
  const [credentials, setCredentials] = useState({ owner: 'CRGuarda', repo: 'fulltime-force-app' })
  const [isCustomRepo, setIsCustomRepo] = useState(false)
  const [commitsList, setCommitsList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const { isLoading, data, error } = useCommit(credentials)

  const getMoreCommits = async () => {
    if (commitsList.length < 10) return setHasMore(false)
    const moreCommits = await fetch(
      `/api/commits?owner=${credentials.owner}&repo=${credentials.repo}&page=${Math.ceil(commitsList.length / 10) + 1}`
    )

    const moreCommitsRes = await moreCommits.json()

    moreCommitsRes?.commitResponse?.length
      ? setCommitsList((prevState): any => [...prevState, ...moreCommitsRes?.commitResponse])
      : setHasMore(false)
  }

  useEffect(() => {
    if (!data || data?.length === 0 || data?.commitResponse?.length === 0) return
    setHasMore(true)
    setCommitsList(data?.commitResponse)
  }, [data])

  return (
    <main className='m-16'>
      <Welcome login={data.login} html_url={data.html_url} />
      <div className='bg-slate-700 mt-6 p-2 rounded flex flex-col items-center'>
        <p
          onClick={(e) => setIsCustomRepo((prevState) => !prevState)}
          className='bg-indigo-400 rounded p-1 cursor-pointer hover:bg-indigo-600 text-sm md:text-lg'
        >
          Want search another public repo? Click me
        </p>
        {isCustomRepo && <ListOfValue setCredentials={setCredentials} />}
      </div>
      <h3 className='text-2xl p-4'>
        Commits for <span className='font-bold'>{credentials.repo}</span>
      </h3>
      {isLoading && <Loading />}
      {!error ? (
        <InfiniteScroll
          dataLength={commitsList.length}
          next={getMoreCommits}
          hasMore={hasMore}
          scrollThreshold={0.4}
          loader={<span className='text-center'>Cargando...</span>}
          endMessage={<p className='text-center '>Sin más resultados</p>}
        >
          <section className='grid justify-center gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mx-16 my-6'>
            {commitsList.map(({ sha, commit, html_url }: { sha: string; commit: Commit; html_url: string }) => {
              return <CommitCard key={sha} commit={commit} html_url={html_url} />
            })}
          </section>
        </InfiniteScroll>
      ) : (
        <h3 className='bg-amber-600 text-2xl text-center'>Please, verify the name of the public repo</h3>
      )}
    </main>
  )
}
