import React from 'react'
import { Routes,Route } from 'react-router-dom';

import Inici from '../Pages/Inici';
import Menu from '../Pages/Menu';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart'
import LoginSignUp from '../Pages/LoginSignUp'
import Register from '../Pages/Register'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Inici/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
