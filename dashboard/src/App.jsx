import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/index.css'
import Home from './Components/home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
