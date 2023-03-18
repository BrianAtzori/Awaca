import React from 'react'

import "../styles/modules/section-title.module.scss"

//Here the component will be dynamic with props

export default function SectionTitle({title,subTitle}) {
  return (
    <div className=''>
        <h2 className=' text-palette-color-light-blue font-dosis font-bold bg-palette-color-medium pl-2 pr-2 rounded-md text-2xl my-2 2xl:text-4xl'>{title}</h2>
        <div></div>
        <h3 className=' text-palette-color-dark-blue font-lato font-bold decoration-palette-color-dark-blue underline-offset-2 text-xl 2xl:text-3xl'>{subTitle}</h3>
    </div>
  )
}
