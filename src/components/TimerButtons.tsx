import React from 'react'

export default function TimerButtons() {
  return (
    <div className=' grid grid-cols-2 mt-6'>
        <button className='col-span-2 font-dosis bg-palette-color-dark text-3xl border-2 text-[#fff] w-32 mx-auto'>START</button>
        <button className='font-lato font-dosis bg-palette-color-dark  border-2 text-[#fff] w-16  mx-auto'>-</button>
        <button className='font-lato font-dosis bg-palette-color-dark  border-2 text-[#fff] w-16  mx-auto'>+</button>
    </div>
  )
}
