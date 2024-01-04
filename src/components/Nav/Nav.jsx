import React from 'react'
import { User, Plus,AlignJustify } from 'lucide-react';

function Nav() {
  return (
    <nav className=' flex items-center justify-between px-5 lg:px-12 py-3 lg:py-6 w-full bg-black bg-opacity-80 fixed top-0 static z-30'>
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
            <li className=' hover:text-red'>Home</li>
            <li className=' hover:text-red'>About</li>
            <li className=' hover:text-red'>Gallery</li>
            <li className=' hover:text-red'>Schedule</li>
            <li className=' hover:text-red'>Blog</li>
            <li className=' hover:text-red'>Pricing</li>
            <li className=' hover:text-red'>Classes</li>
            <li className=' hover:text-red'>Contact</li>
        </ul>
        {/* join button */}
        <div className=" flex items-center gap-3 text-white">
            {/* mobile btn */}

             <button className='xl:hidden'>
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
    </nav>
  )
}

export default Nav