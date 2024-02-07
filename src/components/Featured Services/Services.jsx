import React from 'react'
import { Dumbbell, HeartPulse, PersonStanding, Weight, ArrowRight } from 'lucide-react';

function Services() {

    const data = [
        {
            img:<Dumbbell/>,
            Name:"Wellness Events",
            btn:"Attend on event",
            description:"ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus sequi amet maxime soluta dolores ex perspiciatis? Mollitia, dicta eaque maxime"
        },
        {
            img:<HeartPulse/>,
            Name:"Wellness Retreats",
            btn:"Reserved your slot",
            description:"ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus sequi amet maxime soluta dolores ex perspiciatis? Mollitia, dicta eaque maxime "
        },
        {
            img:<PersonStanding/>,
            Name:"Guided Stretch Section",
            btn:"Book a session",
            description:"ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus sequi amet maxime soluta dolores ex perspiciatis? "
        },
        {
            img:<Weight/>,
            Name:"Recovery Therapies",
            btn:"Book a session",
            description:"ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus sequi amet maxime soluta dolores .ex  "
            
        },
    ] 


  return (
    <section className=' text-text2 px-4'>
        <div className="">
        <p className=' uppercase text-center my-5 mt-8 font-bold text-[36px] text-text1'>Freatured Services</p>
        </div>
        {/* Services */}
        <div className=" flex xl:justify-center gap-7  overflow-x-scroll xl:overflow-x-hidden snap-x max-w-full px-2">

       {
        data.map((i)=>(
            <div key={i.Name} className=" min-w-60 w-60 bg-bgColor2 rounded-xl p-5 hover:bg-boxHoverColor border border-transparent hover:border-gold cursor-pointer snap-center">
            <div className=" bg-gradient-to-br from-[#F19935] to-gold p-2.5 rounded-xl text-[#fff] w-fit">
                  {i.img}    
             </div> 
             <p className='text-text1 text-xl font-semibold mt-5'>{i.Name}</p>
             <p className='my-4'>{i.description}</p>
             
             <button className=' flex text-text1 gap-2'> {i.btn} <ArrowRight/></button>
         </div>
        ))
       }
        </div>
    </section>
  )
}

export default Services