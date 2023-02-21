import React from 'react'
import {Routes, Route} from "react-router-dom"

import Homepage from "./pages/Hompage.tsx"

import "./styles/global-styles.scss"

export default function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
    </Routes> */}
    <Homepage></Homepage>
    </>
  )
}
