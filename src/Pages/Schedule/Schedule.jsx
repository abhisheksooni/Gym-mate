import React from 'react'
import {  Schedules } from '../../components/AllExport'

import { Link, Outlet } from 'react-router-dom'

import Monday from "./Day/Monday"

function Schedule() {
window.scroll(0,0)

  return (
    <section className='pb-16 bg-bgColor1 text-text2 duration-150'>
      {/* Start Background */}
       <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-bgColor1/70  ">    
      <h1 className='pt-[16rem] text-text1 text-4xl font-semibold px-3'>Schedule by Day</h1>   
      </div>
      </div>

      <div className=" m-auto max-w-[1200px] ">     

<Schedules/>
<Outlet/>

      </div>
    </section>
  )
}

export default Schedule