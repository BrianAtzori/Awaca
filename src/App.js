import React from 'react'
import {Routes, Route} from "react-router-dom"



import Navbar from './components/Navbar.tsx'
import Homepage from "./pages/Hompage.tsx"

import "./styles/global-styles.scss"

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    {/* <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
    </Routes> */}
    <Homepage></Homepage>
    </>
  )
}
