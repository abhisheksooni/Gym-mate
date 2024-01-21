import React, { useState } from 'react'
import { NavLink, } from 'react-router-dom';
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
        <ul className=' gap-5 cursor-pointer font-medium text-white hidden xl:flex hover:*:text-red'>
            <li > <NavLink to={"/"}  className={({isActive})=>`${isActive?"text-red":""}`}>Home</NavLink></li>
            <li > <NavLink to={"AboutUs"}  className={({isActive})=>`${isActive?"text-red":""}`}>About</NavLink></li>
            <li ><NavLink to={"gallery"}  className={({isActive})=>`${isActive?"text-red":""}`}>Gallery</NavLink></li>
            <li ><NavLink to={"schedule/monday"} exact className={({isActive})=>`${isActive?"text-red":""}`}>Schedule</NavLink></li>
            <li ><NavLink to={"blog"}  className={({isActive})=>`${isActive?"text-red":""}`}>Blog</NavLink></li>
            <li ><NavLink to={"pricing"}  className={({isActive})=>`${isActive?"text-red":""}`}>Pricing</NavLink></li>
            <li ><NavLink to={"classes"}  className={({isActive})=>`${isActive?"text-red":""}`}>Classes</NavLink></li>
            <li ><NavLink to={"contact"}  className={({isActive})=>`${isActive?"text-red":""}`}>Contact</NavLink></li>
            
        </ul>
        {/* join button */}
        <div className=" flex items-center gap-3 text-white">
            {/* mobile Menu btn */}
             <button className='xl:hidden'
             onClick={navbtn}
             >               
                 <AlignJustify size={27}/>             
                </button>   
                {/* Login user */}
                <NavLink to={"login"}  className={({isActive})=>`${isActive?"text-red":""} hover:text-red`}><User /></NavLink>
            {/* <button className=''></button> */}
            
            <button className='items-center font-semibold gap-2 border-2 p-1.5 px-2 hidden sm:flex'>
               <span className=' bg-red p-1'>
                <Plus size={27} />
               </span>
                 JOIN CLASS NOW
            </button>

        </div>




    

    {/* mobile menu */}
    <div className={` flex flex-col ${mobileMenu? "":"hidden"} fixed z-[999] bg-white  top-0 left-0 right-0 w-full py-10 `}>
        <div className=" flex w-full justify-end pr-[10vw]">
       <button
       onClick={navbtn}
       > <X size={30} /> </button>
       </div>
        <ul className='cursor-pointer text-xl font-medium *:mb-4 text-center'>
            <li className=' hover:text-red'> <NavLink to={"/"}>Home</NavLink></li>
            <li className=' hover:text-red'> <NavLink to={"AboutUs"}>About</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"gallery"}>Gallery</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"schedule"}>Schedule</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"blog"}>Blog</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"pricing"}>Pricing</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"classes"}>Classes</NavLink></li>
            <li className=' hover:text-red'><NavLink to={"contact"}>Contact</NavLink></li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Nav