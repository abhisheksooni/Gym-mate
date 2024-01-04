import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

import About from './components/About/About'
import FeaturedClass from './components/FeaturedClass/FeaturedClass'
import Trainer from './components/Gym Trainer/Trainer'
import YogaAdd from './components/YogaAdd/YogaAdd'

function App() {
  

  return (
   <div className=''>
   <Nav/>
   <Hero/>
   
   <About/>
   <FeaturedClass/>
   <Trainer/>
   <YogaAdd/>
   </div>
  )
}

export default App
