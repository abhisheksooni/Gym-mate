import React, { useState } from 'react'
import { Facebook,  Instagram, Twitter, Youtube } from 'lucide-react';


function Contact() {


  const [done,setdone ] = useState('')
  return (
    <section className='bg-bgColor1 pb-10 p-5 lg:p-0'>
    {/* Background img */}
  <div className="bg-addpage bg-no-repeat  text-center">
  <div className="  h-[22rem]  bg-bgColor1/70  ">    
  <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>Contact Us</h1>   
  </div>
  </div>
{/* More data */}
<div className='py-10 flex justify-center gap-10 lg:h-[70vh] flex-wrap  '>
 
<div className="text-text1 max-w-[506px] text-center md:text-start">
  <h1 className='text-4xl font-bold my-7'>We are here for help you! To Shape Your Body.</h1>
  <p className='text-text2 mb-7 text-lg'>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
  <div className="flex flex-wrap pl-10 md:pl-0 gap-8 text-start">
    <div className="">
      <h1  className='text-xl font-semibold'>Gwalior,MP,India</h1>
      <div className="w-[50px] h-1 bg-gold my-2"></div>
      <p>81 Main Street</p>
      <span>MP, INDIA</span>
    </div>
    <div className="">
      <h1  className='text-xl font-semibold'>Opening Hours</h1>
      <div className="w-[50px] h-1 bg-gold my-2"></div>
      <p>Mon to Fri: 7:30 am — 1:00 am</p>
      <span>Mon to Fri: 7:30 am — 1:00 am</span>
    </div>
    <div className="">
      <h1  className='text-xl font-semibold'>Information</h1>
      <div className="w-[50px] h-1 bg-gold my-2"></div>
      <p>+91 88788-88888</p>
      <span>gymmate@gmail.com</span>
    </div>
    <div className="">
      <h1  className='text-xl font-semibold'>Follow Us On</h1>
      <div className="w-[50px] h-1 bg-gold my-2"></div>
      <ul className='flex gap-4 *:rounded-full *:p-2  hover:*:bg-gold hover:*:text-[#fff] hover:*:cursor-pointer '>
    <li><Facebook/></li>
    <li><Instagram/></li>
    <li><Twitter/></li>
    <li><Youtube/></li>
   </ul>
    </div>
  
  </div>
</div>
<div className="bg-bgColor2 rounded-xl max-w-[500px] w-full text-text1  p-4 lg:p-10">
<div className="mb-10">
<h1  className='text-3xl font-semibold'>Leave Us Your Info</h1>
      <div className="w-[50px] h-1 bg-gold my-2"></div>
</div>
  <form className=''>
    {/* <label>Name</label>
    <br /> */}
    <input type="text" placeholder='Full Name' className='bg-transparent text-white border  pl-3 py-2 w-full my-2 outline-none '/>
   
    <input type="text" placeholder='Email Address' className='bg-transparent text-white border  pl-3 my-2 outline-none w-full p-2'/>
   <textarea name="" placeholder='Comment' className=' h-[100px] bg-transparent text-white border  pl-3 my-2 outline-none w-full p-2'></textarea>
  
    <br />
    <button onClick={()=>setdone('Done')} className='border bg-gold border-none text-xl font-semibold px-6 py-1 mt-5 mx-auto'>
      Submit Now
    </button>
  </form>
  {/* <span className=' text-[#fff] text-2xl font-semibold'>{done}</span> */}
</div>
</div>
{/* Map */}
<div className="w-full h-[500px]">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7159.196144863961!2d78.17244566909545!3d26.209749954541376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717226108176!5m2!1sen!2sin"  className='w-full h-[500px]'  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
    </section>
  )
}

export default Contact