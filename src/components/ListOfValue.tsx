'use client'
import { getUsers } from '@/helpers/getUser'
import { Options } from '@/interfaces/types.dto'
import React, { useRef, useState } from 'react'
import AsyncSelect from 'react-select/async'

type SingleValue = {
  value: string
  label: string
}

export const ListOfValue = () => {
  const [ownerName, setOwnerName] = useState<SingleValue | null>()
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
      callback(await getUsers(inputValue))
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
        onChange={(e) => setOwnerName(e)}
      />
      <label>Public repo</label>
      <AsyncSelect
        className='my-react-select-container'
        classNamePrefix='my-react-select'
        placeholder={ownerName ? '' : 'fulltime-force-app'}
        loadOptions={loadRepoOptions}
        onChange={(e) => setOwnerName(e)}
        isDisabled={!ownerName}
      />
    </div>
  )
}
