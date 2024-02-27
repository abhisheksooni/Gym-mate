import React from 'react'
import { Newspaper , Search, ChevronRight} from 'lucide-react';
// Blog images
import img2 from "../../Images/blogpage/2.jpg"
import img1 from "../../Images/blogpage/1.jpg"
import img3 from "../../Images/blogpage/3.jpg"
import img4 from "../../Images/blogpage/4.jpg"
import img5 from "../../Images/blogpage/5.jpg"
import img6 from "../../Images/blogpage/6.jpg"
import img7 from "../../Images/blogpage/7.jpg"
// recent images
import r1 from "../../Images/blogpage/recent1.jpg"
import r2 from "../../Images/blogpage/recent2.jpg"
import r3 from "../../Images/blogpage/recent3.jpg"
import r4 from "../../Images/blogpage/recent4.jpg"
import r5 from "../../Images/blogpage/recent5.jpg"
import r6 from "../../Images/blogpage/recent6.jpg"
// Add images
import Add from "../../Images/blogpage/sidebar1.png"
import { Button } from '../../components/AllExport';


function Blog() {

const blogs = [

    {
      id:1,
      img: img1,
      Hadding: "Yoga For Everyone in india 2025 live now",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
    {
      id:2,
      img: img2,
      Hadding: "Getting Back Into CrossFit After Vacation",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform .",
    },
    {
      id:3,
      img: img3,
      Hadding: "Give your fitness a boost with our new gym challenge",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
    {
      id:4,
      img: img4,
      Hadding: "How to Get Fit Your Kids Moving Throughout The Summer",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
    {
      id:5,
      img: img5,
      Hadding: "How to Get Fit Your Kids Moving Throughout The Summer",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
    {
      id:6,
      img: img6,
      Hadding: "How to Get Fit Your Kids Moving Throughout The Summer",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
    {
      id:7,
      img: img7,
      Hadding: "How to Get Fit Your Kids Moving Throughout The Summer",
      discripson: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually.",
    },
 
]

const recentImg = [
  {
    img:r1,
    discripson:"Yoga For Everyone in 2024",
  },
  {
    img:r2,
    discripson:"Getting Back Into CrossFit",
  },
  {
    img:r3,
    discripson:"Meet Fitness Abassador Grace",
  },
  {
    img:r4,
    discripson:"The best are European Meditation Practitioner",
  },
  {
    img:r5,
    discripson:"Learn Boxing With Our Trainer John",
  },
  {
    img:r6,
    discripson:"How To Get Lean For The Summer",
  },
]

window.scroll(0,0)
  return (
    <section className='bg-bgColor1 pb-10 duration-150'>
      {/* Background img */}
    <div className="bg-addpage bg-no-repeat  text-center">
    <div className="  h-[22rem]  bg-bgColor1/70  ">    
    <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>Blogs</h1>   
    </div>
    </div>

    <div className=" bg-bgColor1 pt-12 p-5 flex flex-wrap gap-10 justify-center">
{/* Blog */}
    <div className=" max-w-[745px]">
    
{/* Blog card */}
{
  blogs.map((i)=>(
    <div  key={Math.random()} className="">
<div className=" my-10 max-w-[745px]">
<img src={i.img} alt=""  className='rounded-lg'/>
<div className="px-1">

<div className=" flex items-center text-base text-text2 mt-2">
<Newspaper size={18}/>
<span>-  By <span className='font-semibold'>Admin</span> | March 11,2024 | Yoga </span>
</div>
{/* Hading */}
<h1 className=' text-[2.5rem] leading-10 text-text1 font-bold my-4'>{i.Hadding}</h1>
<p className='text-base text-text2 mb-4'>{i.discripson}</p>
<Button text='More' />
</div>
</div>
</div>
  ))
}
    </div>

{/* Search Section */}
<div className=" flex gap-4 flex-col lg:max-w-[360px] w-full">
  
  {/* Search  */}
<div className=" flex items-center mx-auto h-[60px] border-[1px] rounded-xl">
  <input type="search"
  placeholder='Search...'
  className='h-full p-4 font-medium outline-none bg-transparent text-text1 text-[18px] rounded-s-xl'
  />
  {/* <button>X</button> */}
  <button className='px-4 hover:text-gold h-full text-text1 rounded-r-xl'><Search strokeWidth={3} /></button>
</div> 

{/* Categories */}

<div className=" pl-2 py-4">
  <p className=' my-1 pl-4 font-bold text-lg text-text1'>Categories</p>

  <div className="flex justify-between px-1 items-center font-semibold cursor-pointer text-text2 hover:text-text1 border-b-2 pb-3 py-2">
    <div className="flex">
  <ChevronRight/>
    <p > Boxing</p>
    </div>
    <span >( 5 )</span>
  </div>

  <div className="flex justify-between px-1 items-center font-semibold cursor-pointer text-text2 hover:text-text1 border-b-2 pb-3 py-2">
    <div className="flex">
  <ChevronRight/>
    <p > Boxing</p>
    </div>
    <span >( 5 )</span>
  </div>

  <div className="flex justify-between px-1 items-center font-semibold cursor-pointer text-text2 hover:text-text1 border-b-2 pb-3 py-2">
    <div className="flex">
  <ChevronRight/>
    <p > Boxing</p>
    </div>
    <span >( 5 )</span>
  </div>

  <div className="flex justify-between px-1 items-center font-semibold cursor-pointer text-text2 hover:text-text1 border-b-2 pb-3 py-2">
    <div className="flex">
  <ChevronRight/>
    <p > Boxing</p>
    </div>
    <span >( 5 )</span>
  </div>

  <div className="flex justify-between px-1 items-center font-semibold cursor-pointer text-text2 hover:text-text1 border-b-2 pb-3 py-2">
    <div className="flex">
  <ChevronRight/>
    <p > Boxing</p>
    </div>
    <span >( 5 )</span>
  </div>


</div>

{/* recent  */}
<ul className=' my-4'>
<p className='font-bold text-xl my-4 text-text1'>Popular Tags</p>
  {
    recentImg.map(e=>(
      <li key={Math.random()} className=' flex items-center my-4'>
      <img src={e.img} alt=""
      className=' w-[100px] cursor-pointer rounded-lg'
      />
      <div className="p-3">
        <p className=' font-medium text-text1'>16 March 2024</p>
        <p className=' font-semibold text-lg text-text2 hover:text-text1 cursor-pointer'>{e.discripson}</p>
      </div>
    </li>
    ))
  }
 

</ul>

{/* tags */}
<div className="">
<p className='font-bold text-xl my-4 text-text1'>Popular Tags</p>
<div className=" flex flex-wrap gap-x-5 gap-y-3 text-lg font-medium text-text2 hover:*:text-text1">
<span>#Crossfit</span>
<span>#Fitness</span>
<span>#Gym</span>
<span>#Running</span>
<span>#Workout</span>
<span>#Boxing</span>
<span>#Meditation</span>
<span>#Yoga</span>
</div>
</div>

{/* Add poster */}

<div className=" mx-auto">
  <img src={Add} alt="" />
</div>


</div>
    </div>


    </section>
  )
}

export default Blog