import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/index.css'
import Home from './Components/home'
import Footer from './Components/footer'
import Background from './Components/backgroundAnimation'

function App() {

  return (
    <>
    <Router>
    <Background />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
