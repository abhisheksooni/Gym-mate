import React,{useState} from "react";
import { Button } from "../AllExport";
import { ThumbsUp } from 'lucide-react';
import img1 from "../../Images/blogpage/1.jpg";
import img2 from "../../Images/blogpage/2.jpg";
import img3 from "../../Images/blogpage/3.jpg";
import img4 from "../../Images/blogpage/4.jpg";

function BlogSmallCard() {
  const i = [
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
   
  ];

  return (
    <div className=" text-center">
<h1 className="text-4xl font-bold mb-4 text-text1">Our Recent News</h1>
    <p className=" m-auto max-w-[560px] text-text2">Gymat an unknown printer took a galley of type and scrambled
make a type specimen book.</p>

  <div className=" flex items-center justify-center flex-wrap gap-6 p-6">
    {
      i.map((e)=>(
<div
key={e.id}
className=" bg-bgColor2 hover:bg-boxHoverColor p-2 max-w-[370px] flex items-center flex-col rounded-lg shadow-lg shadow-bgColor2/15 text-center">
      
      <div className="relative">
      <img src={e.img}
       className="rounded-lg w-f" alt="" />
       {/* like btn */}
      <div className=" absolute flex cursor-pointer hover:scale-110 items-center justify-center z-10 right-[3vw] -bottom-3 p-2 bg-gold text-white rounded-full w-[36px] h-[36px] lg:right-[2vw]">
      <ThumbsUp size={38}  />
      </div>
      </div>

      <h2 className="font-semibold text-lg my-2 mt-4 text-text1">{e.Hadding}</h2>
      <p className="font-medium text-text2 text-sm">{e.discripson}  </p>
      <Button addclass={" py-0 px-1.7 my-2 mt-6"} text="More"/>
    </div>
      ))
     
    }
  </div>
  </div>
    
  );
}

export default BlogSmallCard;
