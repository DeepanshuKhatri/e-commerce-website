import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import ShowProduct from './pages/ShowProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import YourProducts from './pages/YourProducts'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'
import Order from './pages/Order'
import Vendors from './pages/Vendors'
import AllProducts from './pages/AllProducts'

const App = () => {
  const user = useSelector(state=>state.user.users)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      {
        user.name && <>
          
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/myProducts' element={<YourProducts/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product' element={<ShowProduct/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path='/vendors' element={<Vendors/>}/>
    <Route path='/allProducts' element={<AllProducts/>}/>

        </>
      }
      <Route path='*' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App