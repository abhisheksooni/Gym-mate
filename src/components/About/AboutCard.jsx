import React from "react";
import NutritionImg from "../../Images/home-2/nutritions.png";
import ProgressionImg from "../../Images/home-2/progresion.png";
import WorkoutImg from "../../Images/home-2/workout.png";

function AboutCard() {
  const imgs = [
    {
      img: ProgressionImg,
      title: "Progression",
      description:
        "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
      img: WorkoutImg,
      title: "Workout",
      description:
        " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
      img: NutritionImg,
      title: "Nutritions",
      description:
        "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    },
  ];

  return (
  <div className=" flex justify-center gap-7 flex-col lg:flex-row">
    {imgs.map((i)=>{
      return <div key={i.title} className=" m-7 p-6 px-12 lg:max-w-[360px] text-center lg:m-0 lg:px-6 cursor-pointer flex shadow-xl shadow-black items-center flex-col gap-4 bg-aboutcardbg hover:bg-aboutcardbgcange hover:text-white">
            <img src={i.img}
             alt=""
             className=""
             />
             <p className="text-[24px] font-bold uppercase">{i.title}</p>
            <p className="text-[15px] font-medium leading-2">{i.description}</p>
        </div>
        console.log("ok");
    })}
  </div>
  );
}

export default AboutCard;
