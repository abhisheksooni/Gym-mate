import React from 'react'
import { WhatToDo } from '../../components/AllExport'

import img1 from "../../Images/About/3.jpg"
import img2 from "../../Images/About/4.jpg"
import icon1 from "../../Images/About/mountain.png"
import icon2 from "../../Images/About/target.png"

function AboutUs() {
  return (
    <section className=' pb-10'>
      <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-black/70  ">    
      <h1 className='pt-[18rem] text-[#fff] text-4xl font-semibold'>About Us</h1>   
      </div>
      </div>
      <WhatToDo text={"noshow"} className={"py-10"}/>

<div className=" flex justify-center items-center flex-col py-10">

  <div className=" flex">
<div className=" text-center flex flex-col justify-center items-center max-w-[570px] px-11">
  <img src={icon1}
  className='max-w-[90px]'
  alt="" />
  <h2 className='font-bold text-4xl mt-3 mb-5'>Our History</h2>
  <p className='font-medium text-base text-[#646464]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
   </div>
<div className="">
  <img src={img1} alt="" />
</div>
  </div>

  <div className=" flex flex-row-reverse">
<div className=" text-center flex flex-col justify-center items-center max-w-[570px] px-11">
  <img src={icon2}
  className='max-w-[90px]'
  alt="" />
  <h2 className='font-bold text-4xl mt-3 mb-5'>Our History</h2>
  <p className='font-medium text-base text-[#646464]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
   </div>
<div className="">
  <img src={img2} alt="" />
</div>
  </div>
</div>
    </section>
  )
}

export default AboutUs