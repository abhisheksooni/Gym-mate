import React from 'react'
import { Facebook,  Instagram, Twitter, Youtube } from 'lucide-react';
function Footer() {
  return (
    
    <section className='bg-bgColor1 text-text2 flex justify-evenly flex-col px-5 items-center lg:flex-row lg:items-start py-10'>
<div className="max-w-[450px] *:mb-4 flex flex-col items-center text-center lg:items-start lg:text-start ">
    <div className="font-bold">
                <span className=' text-3xl text-gold'>G
                <span className='text-2xl text-white '>YM </span>
                </span>
                <span className='text-2xl text-white font-normal'>MATE</span>
                <div className=" font-medium text-xs text-white">
                    <span>ULTIMATE GYM CENTER</span>
                </div>
            </div>
   <p className=''>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
   <ul className='flex gap-4 *:rounded-full *:p-2  hover:*:bg-gold hover:*:text-[#fff] hover:*:cursor-pointer '>
    <li><Facebook/></li>
    <li><Instagram/></li>
    <li><Twitter/></li>
    <li><Youtube/></li>
   </ul>
   {/* <p>Privacy Policy |2024 Gymate
Design by RadiusTheme</p> */}
</div>

<div className=" flex flex-wrap justify-center   text-center items-center lg:items-start gap-[8vw]">
<ul className=' *:mb-2 hover:*:text-gold hover:*:cursor-pointer'>
    <p className='font-extrabold mb-4 text-text1 text-2xl'>Our Classes</p>
    <li >Fitness Classes</li>
    <li>Aerobics Classes</li>
    <li>Power Yoga</li>
    <li>Learn Machines</li>
    <li>Full-body Strength</li>
</ul>

<ul className=' *:mb-2 '>
    <p className='font-extrabold mb-4 text-2xl text-text1'>Working Hours</p>
    <li className='font-bold'>Monday - Friday:</li>
    <li>7:00am - 21:00pm</li>
    <li className='font-bold'>Saturday:</li>
    <li>7:00am - 19:00pm</li>
    <li className='font-bold'>Sunday - Closed</li>
</ul>
</div>
    </section>
   
  )
}

export default Footer