import React from 'react'
import { WhatToDo } from '../../components/AllExport'

import img1 from "../../Images/About/3.jpg"
import img2 from "../../Images/About/4.jpg"
import icon1 from "../../Images/About/mountain.png"
import icon2 from "../../Images/About/target.png"

function AboutUs() {
  window.scroll(0,0)
  return (
    <section className=' pb-10 bg-bgColor1 duration-150'>
      <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-bgColor1/70  ">    
      <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>About Us</h1>   
      </div>
      </div>
      {/* <WhatToDo text={"noshow"} className={"py-10"}/> */}

<div className=" flex justify-center gap-8 lg:gap-0 items-center flex-wrap flex-col py-10">

  <div className=" flex flex-wrap justify-center gap-6 lg:gap-0 lg:flex-row">
<div className=" text-center flex flex-col justify-center items-center max-w-[570px] px-4 xl:px-11">
  <img src={icon1}
  className='max-w-[90px]'
  alt="" />
  <h2 className='font-bold text-4xl mt-3 mb-5 text-text1'>Our History</h2>
  <p className='font-medium text-base text-text2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
   </div>
<div className="sm:min-w-[370px]">
  <img src={img1} alt="" />
</div>
  </div>

  <div className=" flex  flex-wrap justify-center gap-6 lg:gap-0 flex-row-reverse">
<div className=" text-center flex flex-col justify-center items-center max-w-[570px] px-11">
  <img src={icon2}
  className='max-w-[90px]'
  alt="" />
  <h2 className='font-bold text-4xl mt-3 mb-5 text-text1'>Our History</h2>
  <p className='font-medium text-base text-text2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
   </div>
<div className="sm:min-w-[370px]">
  <img src={img2} alt="" />
</div>
  </div>
</div>
    </section>
  )
}

export default AboutUs