import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '/src/components/organisms/Navbar'
import Footer from '/src/components/organisms/Footer'
import Home from '/src/components/pages/Home'
import Recipe from '/src/components/pages/Recipe'
import Login from './components/pages/login'
import Signin from './components/pages/signin'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receita" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
