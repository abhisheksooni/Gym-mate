import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

import About from './components/About/About'

function App() {
  

  return (
   <div className=''>
   <Nav/>
   <Hero/>
   
   <About/>
   </div>
  )
}

export default App
