import React from 'react'


function TrainerCard({Name, Img, Trainer }) {
  return (
    <div className=' text-center w-fit'>
      <img src={Img}
      className=' min-w-[200px] max-w-[350px] w-full rounded-full'
      alt="" />
      <div className=" ">
        <p className='text-[28px] font-semibold mt-5 mb-3 text-text1'>{Name}</p>
        <p className='text-[16px] font-medium text-text2'>{Trainer} Trainer</p>
        <div className=" flex gap-3">
        </div>
      </div>
    </div>
  )
}

export default TrainerCard