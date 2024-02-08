import React from 'react'
import PriceCard from './PriceCard'

function Price() {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-8 py-12 hover:*:bg-boxHoverColor '>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
    </div>
  )
}

export default Price