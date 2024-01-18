import React from 'react'
import Button from '../Button/Button'

function YogaAdd({img="bg2", h, p, span, pp, className}) {
  return (
    <div className={` ${"bg-"+img}  bg-no-repeat-y w-full  uppercase text-white flex flex-col items-center p-6 py-16 my-12 ${className}`}>
        <h2  className=' text-[36px] font-bold text-center '>{h ? h:"yoga classes this summer"+"."}</h2>

            <p className=' text-[34px] w-80 text-center my-9 '>{p? p : "pay now and  get"}<span className=' text-red'>{span? span :" 35% "}</span>{pp? pp :"discont"}</p>
        
        <Button/>
    </div>
  )
}

export default YogaAdd