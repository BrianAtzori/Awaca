import React from 'react'

export default function Card({featuredImage, cardLink, linkName}) {
  return (
    <div>
        <img src={featuredImage}></img>
        <h2>{linkName}</h2>
        <a href={cardLink}> Scopri di più</a>
    </div>
  )
}
