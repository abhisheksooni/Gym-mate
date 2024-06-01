import React from 'react'
import PriceCard from './PriceCard'

function Price() {
  return (
    <>
    <div className="text-text2 text-center my-10">
    <h1 className="text-4xl font-bold mb-4 text-text1 mx-auto">Exclusive Pricing Plan</h1>
    <p className=" m-auto max-w-[560px] text-text2">Gymat an unknown printer took a galley of type and scrambled
make a type specimen book.</p>
    </div>
    <div className='flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-8 pt-8 pb-12 hover:*:bg-boxHoverColor '>
        <PriceCard  />
        <PriceCard price='999' plans="Stended"/>
        <PriceCard price='1900' plans='Premium'/>
    </div>
    </>
  )
}

export default Price