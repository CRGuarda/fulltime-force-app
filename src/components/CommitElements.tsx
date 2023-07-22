import { CalendarIcon, CommitIcon, PersonIcon } from '@/components/Icons'
import { Commit } from '@/interfaces/types.dto'
import React from 'react'

export const CommitName = ({ message }: { message: string }) => (
  <div className='grid grid-cols-[10%,1fr]'>
    <CommitIcon />
    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{message}</h5>
  </div>
)

export const CommitDate = ({ date }: { date: string }) => (
  <div className='flex'>
    <CalendarIcon />
    <span>{date.slice(0, -10)}</span>
  </div>
)

export const CommitPerson = ({ person }: { person: string }) => (
  <div className='flex'>
    <PersonIcon />
    <span>{person}</span>
  </div>
)
