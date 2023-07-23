import React from 'react'

export const Welcome = ({ login, html_url }: { login: string; html_url: string }) => {
  return (
    <h2 className='text-center text-2xl md:text-4xl'>
      Welcome
      {login && (
        <>
          ,
          <a className='font-bold underline	' href={html_url} target='_blank' rel='noopener'>
            @{login}
          </a>
        </>
      )}
    </h2>
  )
}
