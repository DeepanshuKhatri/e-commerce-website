import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App