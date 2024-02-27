import React from 'react'
import { GalleryImages } from './Images'

function Gallery() {

  
 window.scroll(0,0)

  return (
    <section className='pb-10 bg-bgColor1 duration-150'>
 <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-bgColor1/70  ">    
      <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>Gallery</h1>   
      </div>
      </div>

      <div className=" max-w-[1300px] flex flex-wrap justify-center flex-1-1  m-auto my-10">
      { GalleryImages.map((i)=>(
    // <p key={i.id} >{i.id}</p>
    <div key={i.id} className="  *:rounded-lg  m-[0.6rem]">
      <img
      
      src={i.img}
      className='  w-full p-[1px] max-w-[385px]'
      alt="" />

    </div>
  ))}
      </div>
    
    </section>
  )
}

export default Gallery