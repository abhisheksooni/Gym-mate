import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { User, Plus,AlignJustify, X } from 'lucide-react';

function Nav() {

    const [ mobileMenu,SetmobileMenu ] = useState(false)
    let b = "hidden"

    function navbtn (){
        SetmobileMenu(!mobileMenu)
        console.log(mobileMenu);
    }
  return (
    <>   
    <nav className=' flex items-center justify-between px-5 lg:px-12 py-3 lg:py-6 w-full bg-black bg-opacity-80 fixed top-0  z-30'>
        {/* logo */}
        <div className=" flex items-center cursor-pointer">
            {/* add images */}
            <img src="" alt="" />
            <div className="font-bold">
                <span className=' text-3xl text-red'>G
                <span className='text-2xl text-white '>YM </span>
                </span>
                <span className='text-2xl text-white font-normal'>MATE</span>
                <div className=" font-medium text-xs text-white">
                    <span>ULTIMATE GYM CENTER</span>
                </div>
            </div>
        </div>
        {/* li */}
        <ul className=' gap-5 cursor-pointer font-medium text-white hidden xl:flex '>
            <li className=' hover:text-red'> <Link to={"/"}>Home</Link></li>
            <li className=' hover:text-red'> <Link to={"AboutUs"}>About</Link></li>
            <li className=' hover:text-red'><Link to={"gallery"}>Gallery</Link></li>
            <li className=' hover:text-red'><Link to={"schedule"}>Schedule</Link></li>
            <li className=' hover:text-red'><Link to={"blog"}>Blog</Link></li>
            <li className=' hover:text-red'><Link to={"pricing"}>Pricing</Link></li>
            <li className=' hover:text-red'><Link to={"classes"}>Classes</Link></li>
            <li className=' hover:text-red'><Link to={"contact"}>Contact</Link></li>
        </ul>
        {/* join button */}
        <div className=" flex items-center gap-3 text-white">
            {/* mobile btn */}

             <button className='xl:hidden'
             onClick={navbtn}
             >               
                 <AlignJustify size={27}/>             
                </button>   

            <button className='hover:text-red'><User /></button>
            
            <button className='items-center font-semibold gap-2 border-2 p-1.5 px-2 hidden sm:flex'>
               <span className=' bg-red p-1'>
                <Plus size={27} />
               </span>
                 JOIN CLASS NOW
            </button>

        </div>




    

    {/* mobile menu */}
    <div className={` flex flex-col ${mobileMenu? "hidden":""} fixed z-[999] bg-white  top-0 left-0 right-0 w-full py-10 `}>
        <div className=" flex w-full justify-end pr-[10vw]">
       <button
       onClick={navbtn}
       > <X size={30} /> </button>
       </div>
        <ul className='cursor-pointer text-xl font-medium *:mb-4 text-center'>
            <li className=' hover:text-red'> <Link to={"/"}>Home</Link></li>
            <li className=' hover:text-red'> <Link to={"AboutUs"}>About</Link></li>
            <li className=' hover:text-red'><Link to={"gallery"}>Gallery</Link></li>
            <li className=' hover:text-red'><Link to={"schedule"}>Schedule</Link></li>
            <li className=' hover:text-red'><Link to={"blog"}>Blog</Link></li>
            <li className=' hover:text-red'><Link to={"pricing"}>Pricing</Link></li>
            <li className=' hover:text-red'><Link to={"classes"}>Classes</Link></li>
            <li className=' hover:text-red'><Link to={"contact"}>Contact</Link></li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Nav