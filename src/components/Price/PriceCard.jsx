import React from 'react'
import { Button } from '../AllExport'
import { CheckCircle } from 'lucide-react';

function PriceCard({price="499",plans='Basic'}) {
  return (
    <div className='  max-w-[250px] w-full bg-bgColor2 *:mb-3 px-6 py-8 rounded-md border border-transparent hover:border-gold'>
        <p className='font-medium text-2xl text-text2'>{plans}</p>
        <p className='text-2xl font-bold text-text1'>Rs.{price}<span className='text-xs font-normal'>/Month</span></p>
        <ul className='*:mb-2 text-text2  *:flex *:gap-2'>
         <li><CheckCircle color='#F2A851'/> <p>Free Hand</p></li>
         <li><CheckCircle color='#F2A851'/> Gym Fitness</li>
         <li><CheckCircle color='#F2A851'/> Weight Loss</li>
         <li><CheckCircle color='#F2A851'/> Personal Trainer</li>
         <li><CheckCircle color='#F2A851'/> Cycling</li>
        </ul>
        <Button  text='Join Now' to={"/contact"} addclass="py-0 mt-8"/>
    </div>
  )
}

export default PriceCard