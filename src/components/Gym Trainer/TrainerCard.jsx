import React from 'react'


function TrainerCard({Name, Img, Trainer }) {
  return (
    <div className=' flex flex-col items-center w-fit'>
      <img src={Img}
      className=' max-w-[130px] lg:max-w-[300px] w-full rounded-full'
      alt="" />
      <div className=" text-center">
        <p className=' text-[20px] lg:text-[28px] font-semibold mt-5 mb-3 text-text1'>{Name}</p>
        <p className='text-[16px] font-medium text-text2'>{Trainer} Trainer</p>
        <div className=" flex gap-3">
        </div>
      </div>
    </div>
  )
}

export default TrainerCard