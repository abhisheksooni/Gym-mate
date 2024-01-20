import React from 'react'
import {  Schedules } from '../../components/AllExport'

import { Link, Outlet } from 'react-router-dom'

import Monday from "./dd/Monday"

function Schedule() {
  return (
    <section className='pb-16'>
       <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-black/70  ">    
      <h1 className='pt-[18rem] text-[#fff] text-4xl font-semibold'>Schedule by Day</h1>   
      </div>
      </div>

      <div className=" m-auto max-w-[1200px] h-[28rem]">     

<Schedules/>
<Outlet/>

      </div>
    </section>
  )
}

export default Schedule