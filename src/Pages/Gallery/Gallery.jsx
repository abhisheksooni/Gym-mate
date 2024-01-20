import React from 'react'
import { GalleryImages } from './Images'

function Gallery() {

  
  //  console.log(a);

  return (
    <section className='pb-10 '>
 <div className="bg-addpage bg-no-repeat  text-center">
      <div className="  h-[22rem]  bg-black/70  ">    
      <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>Gallery</h1>   
      </div>
      </div>

      <div className=" max-w-[1300px] flex flex-wrap justify-center flex-1-1  m-auto my-10 ">
      { GalleryImages.map((i)=>(
    // <p key={i.id} >{i.id}</p>
    <img
    key={i.id}
    src={i.img}
    className=' max-w-[385px] w-full p-[0.6rem]'
    alt="" />
  ))}
      </div>
    
    </section>
  )
}

export default Gallery