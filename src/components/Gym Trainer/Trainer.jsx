import React from 'react'
import TrainerCard from './TrainerCard'
import t1 from '../../Images/trainers/trainer_1.jpg'
import t2 from '../../Images/trainers/trainer_2.jpg'
import t3 from '../../Images/trainers/trainer_3.jpg'

function Trainer() {
  return (
    <div className=''>
        <div className=" text-center mb-10">
            <p className=' uppercase font-bold text-base'>GYM TRAINERS</p>
            <h2 className=' text-5xl font-bold my-10'>Team of Expert Coaches</h2>
            <p className=' font-medium text-[15px] text-[#646464] px-5'>Expert team of coaches helps you succeed in any goal,
personalized guidance and motivation provided!</p>
        </div>
        <div className=" flex flex-wrap gap-6 justify-center">

        <TrainerCard Name={"John Doe"} Img={t1} Trainer={"Yoga"}/>
        <TrainerCard Name={"Ana June"} Img={t2} Trainer={"Personal"}/>
        <TrainerCard Name={"Jonathan Doe"} Img={t3} Trainer={"Crossfit"}/>
        </div>
        
    </div>
  )
}

export default Trainer