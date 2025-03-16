import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export const Layout = () => {
  return (
    <div className='relative'>
        <main><Outlet /></main>
    </div>
  )
}

export default Layout
