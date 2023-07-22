import { CommitDate, CommitName, CommitPerson } from '@/components/CommitElements'
import { CalendarIcon, CommitIcon, PersonIcon } from '@/components/Icons'
import { Commit } from '@/interfaces/types.dto'
import React from 'react'

export const CommitCard = ({ html_url, commit }: { html_url: string; commit: Commit }) => {
  return (
    <a
      href={html_url}
      target='_blank'
      rel='noopener'
      className='max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between'
    >
      <CommitName message={commit.message} />
      <div className='font-normal text-gray-700 dark:text-gray-400 flex flex-col'>
        <CommitDate date={commit.author.date} />
        <CommitPerson person={commit.author.name} />
      </div>
    </a>
  )
}
