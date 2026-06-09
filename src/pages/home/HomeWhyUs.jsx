import React from "react";
import HomeWhyUsImg from "../../assets/HomeWhyUs.png";
import OrangeBtn from "../../ui/OrangeBtn";
import { GoCheckCircle } from "react-icons/go";
import { HiPlay } from "react-icons/hi2";
import ZoomInComponent from "../../ui/ZoomInComponent.jsx";
import HomeWhyUsCircles from "../../assets/HomeWhyUsCircles.svg";

const liStyle =
  "flex items-start gap-[16px] mb-[12px] text-[16px] font-normal leading-relaxed text-[#424551] group";

const HomeWhyUs = () => {
  return (
    <section className="relative py-[120px] md:py-[180px] bg-white overflow-hidden">
      <div className="absolute right-[-20px] top-[10%] pointer-events-none opacity-10 grid grid-cols-4 gap-2 hidden lg:grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        ))}
      </div>

      <ZoomInComponent>
        <div className="w-full max-w-[1230px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[60px] lg:gap-[135px] relative z-10">
          <div className="relative group/img shrink-0 select-none">
            <div className="absolute inset-0 bg-[#FF3F3A]/5 rounded-md filter blur-xl transform group-hover/img:scale-105 transition-transform duration-700"></div>

            <div className="relative rounded-md overflow-hidden shadow-xl border border-gray-100">
              <img
                src={HomeWhyUsImg}
                alt="Why Choose Createx"
                className="w-full max-w-[480px] h-auto object-cover transform group-hover/img:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/img:bg-black/25 flex items-center justify-center transition-all duration-300">
                <button
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF3F3A] text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Play introduction video"
                >
                  <HiPlay className="w-8 h-8 ml-0.5" />
                </button>
              </div>
            </div>

            <div className="absolute -left-6 bottom-8 bg-white p-4 rounded-md shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce [animation-duration:4s] hidden sm:flex">
              <div className="text-3xl font-black text-[#1E212C]">12k+</div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-[#787A80] leading-tight">
                Active
                <br />
                Students
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] max-w-[615px]">
            <div>
              <span className="text-[16px] font-bold uppercase tracking-[0.15em] text-[#1E212C] block mb-2">
                Who we are
              </span>
              <h2 className="text-3xl md:text-[46px] font-black text-[#1E212C] tracking-tight leading-tight">
                Why Createx?
              </h2>
            </div>

            <ul className="mt-2">
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </span>
              </li>
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Vulputate placerat amet pulvinar lorem nisl.</span>
              </li>
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </span>
              </li>
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Etiam duis lobortis in fames ultrices commodo nibh.</span>
              </li>
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Tincidunt sagittis neque sem ac eget.</span>
              </li>
              <li className={liStyle}>
                <GoCheckCircle className="text-[#FF3F3A] w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Ultricies amet justo et eget quisque purus vulputate dapibus
                  tortor.
                </span>
              </li>
            </ul>

            <div className="mt-4 transition-transform duration-300 hover:scale-103 active:scale-98 inline-block self-start">
              <OrangeBtn className="w-[180px] h-[48px] shadow-md hover:shadow-[#FF3F3A]/10">
                More about us
              </OrangeBtn>
            </div>
          </div>

          <img
            className="absolute right-[-111px] bottom-[-150px] opacity-70 pointer-events-none hidden xl:block z-[-1]"
            src={HomeWhyUsCircles}
            alt=""
          />
        </div>
      </ZoomInComponent>
    </section>
  );
};

export default HomeWhyUs;
