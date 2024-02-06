import React, { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'

function Schedules() {
 
// const [addSchedule,SetaddSchedule] = useState(Schedule)

  const filterDays = (days)=>{
    const updatedays = Schedule.filter((e)=>{
       return e.day == days
    });

SetaddSchedule(updatedays)
}
  
  return (
    <div className="">
      <div className="flex justify-center flex-wrap gap-4 my-16">
        
        <NavLink
        to={"monday"} 
        className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
            Monday
        
        </NavLink>
        <NavLink
        to="tuesday"
        className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
            Tuesday
        
        </NavLink>
        <NavLink
        to="wednesday"
        className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
            Wednesday
        
        </NavLink>
        <NavLink
        to="thursday"
        className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
           Thursday
        
        </NavLink>
        <NavLink
        to="friday"
       className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
            Friday
        
        </NavLink>
        <NavLink
        to={"saturday"}
       className={ ({isActive})=>` ${isActive? "bg-gradient-to-br text-white" : ""} from-[#F19935] to-[#E7BF85] rounded-3xl border border-gold py-2 px-5 font-medium hover:bg-gradient-to-br hover:text-white `}
        >
           Saturday
        
        </NavLink>
        

       
      </div>

{/* use Router */}
{/* <Outlet/> */}
      {/* {addSchedule.map((i) => (
        <div key={Math.random()} className="flex m-11 justify-evenly">
          <div className="max-w-[150px] w-full">
            <p className="text-sm text-[#A0A0A0] font-medium">Class Name</p>
            <p className="font-bold text-lg">{i.Name}</p>
          </div>
          <div className="text-center max-w-[200px] w-full">
            <p className="text-sm text-[#A0A0A0] font-medium">Time</p>
            <p className="font-bold text-lg">{i.Time}</p>
          </div>
          <div className="text-center max-w-[200px] w-full">
            <p className="text-sm text-[#A0A0A0] font-medium">Trainer</p>
            <p className="font-bold text-lg">{i.TrainerName}</p>
          </div>

          
          <button className="bg-[#555555] text-white py-2 px-5 rounded-3xl font-medium hover:bg-gold">
            Join Now
          </button>
        </div>
      ))} */}
    </div>
  );
}

function btn(fb, day) {
  return (
    <button
      onClick={fb}
      className=" rounded-3xl border-2 py-2 px-5 font-medium hover:bg-gold hover:text-white "
    >
      <span>{day}</span>
    </button>
  );
}

function ScheduleBtn() {
  let day = [
    {
      id: 1,
      day: "Monday",
    },
    {
      id: 2,
      day: "Tuesday",
    },
    {
      id: 3,
      day: "Wednesday",
    },
    {
      id: 4,
      day: "Thursday",
    },
    {
      id: 5,
      day: "Friday",
    },
    {
      id: 6,
      day: "Saturday",
    },
    {
      id: 7,
      day: "Sunday",
    },
  ];
  return (
    <div className=" flex justify-center gap-4 my-8">
      {day.map((i) => (
        <button
          key={i.id}
          className=" rounded-3xl border-2 py-2 px-5 font-medium hover:bg-gold hover:text-white "
        >
          <span>{i.day}</span>
        </button>
      ))}
    </div>
  );
}

// export default Schedule
export { Schedules, ScheduleBtn };
