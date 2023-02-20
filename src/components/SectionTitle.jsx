import React from 'react'

import "../styles/modules/section-title.module.scss"

//Here the component will be dynamic with props

export default function SectionTitle({title,subTitle}) {
  return (
    <div className=''>
        <h2 className=' text-[#0c4a6e] font-dosis font-bold bg-palette-color-medium pl-2 pr-2 rounded-md text-2xl my-2 '>{title}</h2>
        <div></div>
        <h3 className=' text-[#0c4a6e] font-lato underline decoration-[#0c4a6e] underline-offset-2 text-xl'>{subTitle}</h3>
    </div>
  )
}
