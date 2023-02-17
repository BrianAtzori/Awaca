import React from 'react'

import "../styles/modules/section-title.module.scss"

//Here the component will be dynamic with props

export default function SectionTitle({title,subTitle}) {
  return (
    <div>
        <h2 className='font-dosis'>{title}</h2>
        <div></div>
        <h3 className='font-lato'>{subTitle}</h3>
    </div>
  )
}
