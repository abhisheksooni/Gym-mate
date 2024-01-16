import React from "react";
import bike from "../../Images/features/gym-bike.png";

function FeaturedClass() {
  return (
    <section className=" mx-auto max-w-[124rem] mb-14 flex items-center flex-col">
      <div className=" text-center">
        <p className=" font-semibold text-base">OUR FEATURED CLASS</p>
        <p className="text-[3.6rem] font-bold my-10">
          We Are Offering Best Flexible Classes
        </p>
      </div>
{/*  */}
      <div className="  items-center lg:grid grid-cols-1 lg:grid-cols-4 *:h-[300px] w-full lg:max-w-[72rem] *:m-4 lg:*:m-0 lg:gap-4 *:overflow-hidden *:relative *:bg-black">
       
        <div className=" col-span-2 ">
          {/* <div className=" absolute z-10">
              <img src={bike} alt="" />
            </div> */}
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">Cycling</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Wednesday: 9:00am-10:00am
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>

        <div className="">
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">Karate</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Friday: 10:00am-11:00am
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>
        <div className="">
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">Power</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Saturday: 9:00am-10:00am
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>

        <div className="">
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">Meditation</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Friday: 1:00pm-2:00pm
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>
        <div className="">
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">Martial Arts</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Sundday: 6:00pm-7:00pm
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>
        <div className="col-span-2">
          <div className="absolute z-10 text-white bottom-5 left-4">
            <p className=" font-bold text-3xl">workout</p>
            <p className=" bg-red text-base py-0.5 mt-5 px-2">
              Monday: 4:00pm-5:00pm
            </p>
          </div>
          <div className=" bg-ci1 bg-no-repeat bg-center bg-cover h-full opacity-70 hover:opacity-100 hover:scale-110 "></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedClass;
