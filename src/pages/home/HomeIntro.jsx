import React from "react";
import OrangeBtn from "../../ui/OrangeBtn";
import OutlineBtn from "../../ui/OutLineBtn.jsx";
import PlayShowreel from "../../ui/PlayShowreel";
import HomeIntroBCg from "../../assets/HomeIntroBCg.svg";
import HomeIntroArrow from "../../assets/HomeIntroArrow.svg";
import HomeIntroShapes from "../../assets/HomeIntroShapes.svg";
import HomeIntroShapes2 from "../../assets/HomeIntroShapes2.svg";
import HomeIntroDots from "../../assets/HomeIntroDots.svg";
import ZoomInComponent from "../../ui/ZoomInComponent.jsx";

const HomeIntro = () => {
  return (
    <section className="bg-[#FEDBD3] pt-[50px] pb-[60px] w-full">
      <ZoomInComponent>
        <div className="max-w-[1230px] w-full mx-auto flex items-center justify-between px-4 relative">
          <img
            className="absolute top-[-40px] left-[-100px]"
            src={HomeIntroArrow}
            alt="HomeIntroArrow"
          />
          <div>
            <PlayShowreel />

            <h1 className="w-[496px] text-[#1E212C] text-[58px] font-black leading-tight mt-[24px]">
              Enjoy studying with Createx Online Courses
            </h1>

            <img
              className="absolute left-[500px] top-[300px]"
              src={HomeIntroShapes}
              alt="HomeIntroShapes"
            />

            <div className="w-[400px] flex">
              <OutlineBtn className="w-[148px] h-[52px] mt-[60px] mr-[24px]">
                About us
              </OutlineBtn>
              <OrangeBtn className="w-[200px] h-[52px] mt-[60px]">
                Explore courses
              </OrangeBtn>
            </div>

            <img
              className="absolute left-[420px] bottom-[-30px]"
              src={HomeIntroShapes2}
              alt="HomeIntroShapes2"
            />
          </div>
          <div>
            <img src={HomeIntroBCg} alt="HomeIntroBCg" />
          </div>

          <img
            className="absolute right-[-140px] bottom-[40px]"
            src={HomeIntroDots}
            alt="HomeIntroDots"
          />
        </div>
      </ZoomInComponent>
    </section>
  );
};

export default HomeIntro;
