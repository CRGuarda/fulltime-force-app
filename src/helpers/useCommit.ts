'use client'
import { requestFailed, requestStarted, requestSuccessful } from '@/helpers/actions'
import { reducer } from '@/helpers/reducer'
import { useEffect, useReducer } from 'react'

export const useCommit = ({ owner, repo }: { owner: string; repo: string }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    if (!owner || !repo) return dispatch(requestFailed({ error: '' }))
    const abortController = new AbortController()
    const fetchData = async () => {
      dispatch(requestStarted())

      try {
        const res = await fetch(`/api/commits?owner=${owner}&repo=${repo}`, {
          signal: abortController.signal,
        })
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`)
        }

        const data = await res.json()
        return dispatch(requestSuccessful(data))
      } catch (e) {
        if (e instanceof Error) dispatch(requestFailed({ error: e.message }))
        console.log({ e })
      }
    }
    fetchData()
    return () => {
      abortController.abort()
    }
  }, [owner, repo])
  return state
}
