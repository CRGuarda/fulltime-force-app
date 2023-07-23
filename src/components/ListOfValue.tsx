'use client'
import { getUsers } from '@/helpers/getUser'
import { Options } from '@/interfaces/types.dto'
import React, { useRef } from 'react'
import AsyncSelect from 'react-select/async'

export const ListOfValue = ({ label, placeholder }: { label: string; placeholder: string }) => {
  const timer = useRef<NodeJS.Timeout | number>()

  const loadOptions = (inputValue: string, callback: (options: Options[]) => void) => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(async () => {
      callback(await getUsers(inputValue))
    }, 1000)
  }

  return (
    <div>
      {label && <label>{label}</label>}
      <AsyncSelect
        className='my-react-select-container'
        classNamePrefix='my-react-select'
        placeholder={placeholder}
        loadOptions={loadOptions}
      />
    </div>
  )
}
