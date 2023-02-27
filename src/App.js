import React from 'react'
import {Routes, Route} from "react-router-dom"



import Navbar from './components/Navbar'
import Homepage from "./pages/Hompage"

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
