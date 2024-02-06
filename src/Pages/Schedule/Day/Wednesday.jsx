import React from 'react'
import { ScheduleWednesday } from '../ScheduleData'
function Wednesday() {
  return (
    <div>
        {ScheduleWednesday.map((i) => (
        <div key={Math.random()} className="flex m-11 flex-wrap justify-center items-center  lg:justify-between">
        <div className="max-w-[150px] text-center lg:text-start w-full">
          <p className="text-sm text-text2 font-medium">Class Name</p>
          <p className="font-bold text-lg text-text1">{i.Name}</p>
        </div>
        <div className="text-center my-3 max-w-[200px] w-full">
          <p className="text-sm text-text2 font-medium">Time</p>
          <p className="font-bold text-lg text-text1">{i.Time}</p>
        </div>
        <div className="text-center max-w-[200px] w-full">
          <p className="text-sm text-text2 font-medium">Trainer</p>
          <p className="font-bold text-lg text-text1">{i.TrainerName}</p>
        </div>

        {/* onclick bg-red */}
        <button className="bg-bgColor2 text-white mt-4 py-2 px-5 rounded-3xl font-medium hover:bg-boxHoverColor">
          Join Now
        </button>
        </div>
      ))}
    </div>
  )
}

export default Wednesday