import React from 'react'
import TimerButtons from './TimerButtons.tsx'

export default function Timer() {
  return (
    <main className='bg-palette-color-darker mt-6 mb-6'>
      <p>00:00</p>
      <TimerButtons></TimerButtons>
    </main>
  )
}
