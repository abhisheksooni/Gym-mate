import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../components/AllExport'
function Root() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root