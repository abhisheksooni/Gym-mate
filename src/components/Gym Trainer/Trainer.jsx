import React from 'react'
import TrainerCard from './TrainerCard'
import t1 from '../../Images/trainers/trainer_1.jpg'
import t2 from '../../Images/trainers/trainer_2.jpg'
import t3 from '../../Images/trainers/trainer_3.jpg'

function Trainer() {
  return (
    <div className='my-10'>
        <div className=" text-center mb-10">
            <h1 className=' uppercase font-bold text-3xl text-text1'>GYM TRAINERS</h1>
            <h2 className=' text-2xl font-bold my-3 text-text2'>Team of Expert Coaches</h2>
            <p className=' font-medium text-[15px] text-text2 px-5 max-w-[560px] mx-auto'>Expert team of coaches helps you succeed in any goal,
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