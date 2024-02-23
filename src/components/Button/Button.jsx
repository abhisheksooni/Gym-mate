import React from 'react'
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Button({text="add-name", bg="red", goto, addclass,to}) {
  return (
    <NavLink to={to}>
    <button className={`px-4 py-3 border border-[#E7BF85] text-[#E7BF85] hover:text-white hover:bg-gradient-to-br  from-[#F19935] to-[#E7BF85] rounded-md  font-medium flex items-center justify-start gap-2 ${addclass}`}>
       <p>{text}</p>
    <ArrowRight/>
    </button>
    </NavLink>
  )
}

export default Button