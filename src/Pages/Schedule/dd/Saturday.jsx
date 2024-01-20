import React from 'react'
 import { ScheduleSaturday } from '../ScheduleData'
function Saturday() {
  return (
    <div>
        {ScheduleSaturday.map((i) => (
        <div key={Math.random()} className="flex m-11 justify-between">
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

          {/* onclick bg-red */}
          <button className="bg-[#555555] text-white py-2 px-5 rounded-3xl font-medium hover:bg-red">
            Join Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default Saturday