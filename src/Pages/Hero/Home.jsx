import React, { useState } from "react";

import logo1 from "../../Images/add logos/logo1.png";
import logo2 from "../../Images/add logos/logo2.png";
import logo3 from "../../Images/add logos/logo3.png";
import logo4 from "../../Images/add logos/logo4.png";
import logo5 from "../../Images/add logos/logo5.png";
import {
  Nav,
  Hero,
  About,
  FeaturedClass,
  Trainer,
  YogaAdd,
  Button,
  Bmi,
  Price,
  BlogSmallCard,
  Footer,
} from "../../components/AllExport";

function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <About />
      <FeaturedClass />
      <YogaAdd />
      <Trainer />
      {/* gyms comp. logos */}
      <div className=" my-12 flex justify-center gap-8 p-5 overflow-x-scroll lg:*:max-w-38">
        <img src={logo1} alt="logos" />
        <img src={logo2} alt="logos" />
        <img src={logo3} alt="logos" />
        <img src={logo4} alt="logos" />
        <img src={logo5} alt="logos" />
      </div>
      <Bmi />
      <Price />
      <BlogSmallCard />
      <YogaAdd
        h={"Need a Fitness Trainer?"}
        p={"Phone "}
        span={"call : "}
        pp={"+91 888-8888"}
      />
    <Footer/>
    </div>
  );
}

export default Home;
