import React from 'react'

export default function Card({featuredImage, cardLink, linkName}) {
  return (
    <div className=' bg-palette-color-whitesmoke  p-4 flex flex-col gap-4 rounded-xl font-lato shadow-2xl border-opacity-10 border-2 border-palette-color-dark-blue over'>
        <img src={featuredImage} alt={linkName}></img>
        <h2 className='text-palette-color-dark-blue'>{linkName}</h2>
        <a href={cardLink} className='bg-palette-color-dark-blue text-palette-color-whitesmoke p-2 rounded-md w-2/4 text-center'>Read more</a>
    </div>
  )
}
