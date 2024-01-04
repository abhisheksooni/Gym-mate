import React from 'react'


function TrainerCard({Name, Img, Trainer }) {
  return (
    <div className=' text-center w-fit'>
      <img src={Img}
      className=' w-[80vw] lg:w-full rounded-full'
      alt="" />
      <div className=" ">
        <p className='text-[28px] font-semibold mt-5 mb-3'>{Name}</p>
        <p className='text-[16px] font-medium'>{Trainer} Trainer</p>
        <div className=" flex gap-3">
        </div>
      </div>
    </div>
  )
}

export default TrainerCard