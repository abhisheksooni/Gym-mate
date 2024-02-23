import React from "react";
import mainImg from "../../Images/trainer4.png"
import Button from "../Button/Button";
import { Github, Linkedin, Instagram } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-heroBg bg-no-repeat z-1">

      <div className="flex justify-center lg:justify-between px-0 lg:px-[3vw] items-center bg-bgColor1/70 pt-[7rem] text-[#fff] h-[100vh] ">

      
      <div className=" hidden flex-col items-center lg:flex text-text2 gap-4 cursor-pointer hover:*:text-[#fff]">
        <div className=" w-1 h-8 bg-red rounded-full"></div>
       <Github/>
       <Linkedin/>
       <Instagram/>
       <div className=" w-1 h-8 bg-red rounded-full"></div>
      </div>
        <div className=" mb-16 ml-8 ">
      <p className=" text-6xl font-bold">MAKE <span className=" text-gold">YOUR</span>  BODY</p>
      <p className=" font-semibold text-5xl mt-5 mb-8">FIT <span className=" text-gold">&</span> PERFECT</p>
      {/* add button */}
      <Button text="Our Class" to={"/contact"} addclass={"m-auto lg:m-0"}/>
        </div>
        </div>
    </section>
  );
}

export default Hero;
