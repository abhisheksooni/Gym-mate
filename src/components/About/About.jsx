import React from 'react'
import AboutCard from './AboutCard'
import{gym, weightlifter, equpments , titelbg, girlrun, girlredbg, girlSideText, wind} from "./AboutImgs"
import Button from '../Button/Button'
import '../../App.css'
import "../../index.css"
import { WhatToDo } from '../AllExport'

function About() {
    
  return (
    <section className=' lg:mt-[-5rem] flex items-center flex-col gap-16  lg:mb-[20rem]'>
<AboutCard/>
<WhatToDo/>
    </section>
  )
}

export default About



/*

add before
-----------------------------------

 <div className=" flex  items-center justify-center gap-7">
    
      <div className=" flex items-center text-center lg:text-left flex-col lg:inline m-7  w-full lg:m-0 lg:w-[35rem]">
    <div className="">
      <p className=' absolute z-10 font-bold text-white pl-12 pt-1.5'>WHO WE ARE</p>
      <img src={titelbg} className='' alt="" />
    </div>
      <p className=' text-[35px] font-bold '>Take Your Health And Body To Next Level</p>
      <p>Take Your Health And Body To Next Level with our comprehensive program designed to help you reach your fitness goals.</p>

      <div className=" flex gap-10 text-[20px] font-semibold flex-col sm:flex-row">
        <div className=" flex items-center flex-col gap-4">
          <img src={weightlifter} alt="" className=' w-[64px] sm:w-[5.4rem]' />
          <p className=' text-center'>PROFESSIONAL <br /> TRAINERS</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={equpments} alt="" className='w-[64px] sm:w-[5.4rem]' />
          <p className=' text-center'>PROFESSIONAL <br /> TRAINERS</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={gym} alt="" className='w-[64px] sm:w-[5.4rem]' />
          <p className=' text-center'>PROFESSIONAL <br /> TRAINERS</p>
        </div>
      </div>
      <Button/>
      </div>


<div className=" w-[35rem] relative hidden lg:inline">
<img src={girlrun} className='girlrun' alt="" />
<img src={girlredbg} className='girlredbg' alt="" />
<img src={girlSideText} className='girlSideText' alt="" />
<img src={wind} className='wind' alt="" />
  </div>
</div>
*/