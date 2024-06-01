import React from "react";
import bike from "../../Images/features/gym-bike.png";

function FeaturedClass() {
  return (
    <section className=" mx-auto max-w-[124rem] my-10 flex items-center flex-col ">
      <div className=" text-center">
        <p className="  font-bold text-[36px] text-text1 mt-8">OUR FEATURED CLASS</p>
        <p className="text-xl text-text2  mb-8 mt-1">
          We Are Offering Best Flexible Classes
        </p>
      </div>
{/*  */}
      <div className="  items-center lg:grid grid-cols-1 lg:grid-cols-4 *:h-[300px] w-full lg:max-w-[72rem] *:m-4 lg:*:m-0 lg:gap-4 *:overflow-hidden *:relative *:bg-black my-10">
       
       {/* All add animesons */}
        <div className=" col-span-2   ">
          {/* <div className=" absolute z-10">
              <img src={bike} alt="" />
            </div> */}
          <div className="absolute z-10 text-text1 bottom-5 left-4">
            <p className=" font-bold text-3xl text-text1">Cycling</p>
            <p className=" backdrop-blur-md text-base py-0.5 mt-5 px-2">
              Wednesday: 9:00am-10:00am
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200 "></div>
        </div>

        <div className="">
          <div className="absolute z-10 text-text1 bottom-5 left-4  ">
            <p className=" font-bold text-3xl text-text1">Karate</p>
            <p className=" backdrop-blur-md  text-base py-0.5 mt-5 px-2  w-fit">
              Friday: 10:00am-11:00am
            </p>
          </div>
          <div className=" bg-ci2 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200"></div>
        </div>
        <div className="">
          <div className="absolute z-10 text-text1 bottom-5 left-4">
            <p className=" font-bold text-3xl text-text1">Power</p>
            <p className=" backdrop-blur-md text-base py-0.5 mt-5 px-2">
              Saturday: 9:00am-10:00am
            </p>
          </div>
          <div className=" bg-ci3 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200 "></div>
        </div>

        <div className="">
          <div className="absolute z-10 text-text1 bottom-5 left-4">
            <p className=" font-bold text-3xl text-text1">Meditation</p>
            <p className=" backdrop-blur-md text-base py-0.5 mt-5 px-2">
              Friday: 1:00pm-2:00pm
            </p>
          </div>
          <div className=" bg-ci4 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200"></div>
        </div>
        <div className="">
          <div className="absolute z-10 text-text1 bottom-5 left-4">
            <p className=" font-bold text-3xl text-text1">Martial Arts</p>
            <p className=" backdrop-blur-md text-base py-0.5 mt-5 px-2">
              Sundday: 6:00pm-7:00pm
            </p>
          </div>
          <div className=" bg-ci5 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200"></div>
        </div>
        <div className="col-span-2">
          <div className="absolute z-10 text-text1 bottom-5 left-4">
            <p className=" font-bold text-3xl text-text1">workout</p>
            <p className=" backdrop-blur-md text-base py-0.5 mt-5 px-2">
              Monday: 4:00pm-5:00pm
            </p>
          </div>
          <div className=" bg-ci6 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-105 ease-in duration-200"></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedClass;
