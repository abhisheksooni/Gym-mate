import React from 'react'
import Button from '../Button/Button'

function YogaAdd() {
  return (
    <div className=' bg-bg2 bg-no-repeat-y w-full  uppercase text-white flex flex-col items-center p-6 py-16 my-12'>
        <h2  className=' text-[36px] font-bold text-center '> yoga classes this summer.</h2>

            <p className=' text-[34px] w-80 text-center my-9 '> pay now and  get <span className=' text-red'>35%</span> discont</p>
        
        <Button/>
    </div>
  )
}

export default YogaAdd