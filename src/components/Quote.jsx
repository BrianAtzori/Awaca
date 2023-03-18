import React from 'react'

export default function Quote({quote}) {
  return (
    <h2 className='text-palette-color-light-blue font-lato italic opacity-100 drop-shadow-2xl bg-palette-color-lighter align-middle p-2 rounded-md'>{quote}</h2>
  )
}
