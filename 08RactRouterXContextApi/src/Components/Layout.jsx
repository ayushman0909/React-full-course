import React ,{useContext, useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import CreateContext from '../ContextApi/CreateContext'

const Layout = () => {
  const {count} =useContext(CreateContext);
  
  return (
    <>
      <Navbar/>
       <div>The Count is {count}</div> 
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
