import React from 'react'
import builder from "../../Images/who-we-are/being-builder.png"
function WhatToDo() {
  return (
    <div className=' flex items-center text-center xl:text-start justify-center flex-wrap gap-6 m-5'>
        <div className=" lg:w-[35rem]">
            <p className=' text-[48px]'>All About</p>
            <p className=' text-[70px]'><span className=' text-red'>GYM</span> FITNESS</p>
            <p className=' text-[16px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos eligendi voluptatibus explicabo cupiditate cum, nostrum iure, amet architecto enim iste corrupti, eius fugiat voluptates. Rerum deserunt earum quo incidunt. </p>
        </div>
<div className="">
    <img src={builder}
    className='lg:w-[540px] w-full'
    alt="" />
</div>
    </div>
  )
}

export default WhatToDo