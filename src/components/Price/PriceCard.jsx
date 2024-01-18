import React from 'react'
import { Button } from '../AllExport'

function PriceCard() {
  return (
    <div className=' text-center max-w-[360px] bg-slate-500 *:mb-3 px-6 py-4 rounded-md'>
        <p className='font-semibold text-2xl'>Stended</p>
        <p className='text-xl font-semibold'>Rs.499<span className='text-xs font-normal'>/Month</span></p>
        <ul className='*:mb-2'>
         <li>Free Hand</li>
         <li>Gym Fitness</li>
         <li>Weight Loss</li>
         <li>Personal Trainer</li>
         <li>Cycling</li>
        </ul>
        <Button addclass="text-[#fff] mt-8"/>
    </div>
  )
}

export default PriceCard