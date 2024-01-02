import React from "react";
import mainImg from "../../Images/trainer4.png"
import Button from "../../components/Button/Button";
import { Github, Linkedin, Instagram } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-heroBg bg-center bg-cover bg-no-repeat ">

      <div className="flex justify-center lg:justify-between px-0 lg:px-[3vw] items-center bg-black/60 pt-[7rem] text-[#fff] h-[88vh]   ">

      
      <div className=" hidden flex-col items-center lg:flex text-[#fff] gap-4 hover:*:text-red">
        <div className=" w-1 h-8 bg-red rounded-full"></div>
       <Github/>
       <Linkedin/>
       <Instagram/>
       <div className=" w-1 h-8 bg-red rounded-full"></div>
      </div>
        <div className=" mb-16 ml-8 ">
      <p className=" text-6xl font-bold">MAKE <span className=" text-red">YOUR</span>  BODY</p>
      <p className=" font-semibold text-5xl mt-5 mb-8">FIT <span className=" text-red">&</span> PERFECT</p>
      {/* add button */}
      <Button text="Join Class" addclass={"m-auto lg:m-0"}/>
        </div>
        </div>
    </section>
  );
}

export default Hero;
