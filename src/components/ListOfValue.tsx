'use client'
import { getRepo } from '@/helpers/getRepo'
import { getUsers } from '@/helpers/getUser'
import { Options } from '@/interfaces/types.dto'
import React, { useRef, useState } from 'react'
import AsyncSelect from 'react-select/async'

/* type SingleValue = {
  value: string
  label: string
} */

export const ListOfValue = ({ setCredentials }: { setCredentials: any }) => {
  const [ownerName, setOwnerName] = useState<string | null>()
  const [repoName, setRepoName] = useState<string | null>()
  const timer = useRef<NodeJS.Timeout | number>()

  const loadOptions = (inputValue: string, callback: (options: Options[]) => void) => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(async () => {
      callback(await getUsers(inputValue))
    }, 1000)
  }

  const loadRepoOptions = (inputValue: string, callback: (options: Options[]) => void) => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(async () => {
      callback(await getRepo(ownerName || 'CRGuarda'))
    }, 1000)
  }
  return (
    <div>
      <label>Github username</label>
      <AsyncSelect
        className='my-react-select-container'
        classNamePrefix='my-react-select'
        placeholder='CRGuarda'
        loadOptions={loadOptions}
        onChange={(input) => {
          setCredentials((currState: any) => ({ ...currState, owner: input?.label }))
          setOwnerName(input?.label)
        }}
      />
      <label>Public repo</label>
      <AsyncSelect
        // key={ownerName || 'CRGuarda'}
        className='my-react-select-container'
        classNamePrefix='my-react-select'
        placeholder={ownerName ? `${ownerName} repos` : 'fulltime-force-app'}
        loadOptions={loadRepoOptions}
        defaultOptions
        isDisabled={!ownerName}
        onChange={(input) => {
          setCredentials((currState: any) => ({ ...currState, repo: input?.label }))
          setRepoName(input?.label)
        }}
      />
    </div>
  )
}
