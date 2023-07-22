'use client'
import React from 'react'
import AsyncSelect from 'react-select/async'
export const ListOfValue = ({ label, placeholder }: { label: string; placeholder: string }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <AsyncSelect className='my-react-select-container' classNamePrefix='my-react-select' placeholder={placeholder} />
    </div>
  )
}
