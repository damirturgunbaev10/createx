import { section } from "framer-motion/client";
import React from "react";
import CoursesIntroShapes from "../../assets/HomeIntroShapes.svg";
import CoursesIntroDots from "../../assets/HomeIntroDots.svg";
import CoursesCorner from "../../assets/HomeNumbersCorner.svg";
import CoursedIntroArrow from "../../assets/HomeIntroArrow.svg";

const CoursesIntro = () => {
  return (
    <section className="w-full h-[400px] bg-[#FEDBD3] flex items-center justify-center text-center">
      <div className="relative">
        <img
          className="absolute left-[-100px] top-[-40px]"
          src={CoursesIntroShapes}
          alt="CoursesIntroShapes"
        />
        <img
          className="absolute right-[-230px] top-[0px]"
          src={CoursesIntroDots}
          alt="CoursesIntroDots"
        />
        <img
          className="absolute left-[-254px] bottom-[-104px]"
          src={CoursesCorner}
          alt="CoureseCorner"
        />
        <img
          className="absolute right-[50px] bottom-[-110px] "
          src={CoursedIntroArrow}
          alt="CoursedIntroArrow"
        />
        <h4 className="font-bold text-base/loose tracking-wider uppercase text-[#FF3F3A]">
          Coureses
        </h4>
        <h2 className="font-black text-[46px] leading-[130%] text-center text-[#1E212C] w-[1020px] mt-[16px] ">
          User Experience. Principles of Human-Centered Design
        </h2>
      </div>
    </section>
  );
};

export default CoursesIntro;
