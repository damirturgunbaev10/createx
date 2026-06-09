import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import TeamCard from "../../ui/TeamCard.jsx";

import "swiper/css";
import "swiper/css/navigation";

const MeetOurTeam = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);

  const teamData = [
    {
      id: 1,
      name: "Dianne Russell",
      role: "Founder and CEO",
      imageSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Jerome Bell",
      role: "Founder and Program Director",
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Kristin Watson",
      role: "Marketer, Curator of Marketing Course",
      imageSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      role: "PM, Curator of Management Course",
      imageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Guy Hawkins",
      role: "Lead UI/UX Designer",
      imageSrc:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative w-full min-h-[568px] bg-[#f9fbfb] flex items-center justify-center py-12 overflow-hidden">
      <div className="absolute right-4 bottom-12 w-24 h-24 opacity-20 bg-[radial-gradient(#64748b_1.5px,transparent_1.5px)] bg-[size:12px_12px]"></div>
      <div className="absolute left-6 top-8 w-16 h-16 opacity-10 bg-[radial-gradient(#64748b_2px,transparent_2px)] bg-[size:16px_16px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-amber-100/20 via-indigo-100/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1230px] min-h-[568px] px-6 flex flex-col justify-between">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase block mb-1">
              Best Tutors Are All Here
            </span>
            <h2 className="text-gray-900 font-extrabold text-3xl sm:text-4xl tracking-tight">
              Meet our team
            </h2>
          </div>

          <div className="flex items-center gap-2.5 select-none">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-200 shadow-sm hover:bg-[#ff4d4d] hover:text-white active:scale-95 cursor-pointer z-30"
              aria-label="Previous Slide"
            >
              <HiArrowLongLeft size={22} />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full bg-white text-gray-700 flex items-center justify-center transition-all duration-200 shadow-sm hover:bg-[#ff4d4d] hover:text-white active:scale-95 cursor-pointer z-30"
              aria-label="Next Slide"
            >
              <HiArrowLongRight size={22} />
            </button>
          </div>
        </div>

        <div className="w-full my-auto">
          <Swiper
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              setInit(true);
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="team-swiper"
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id} className="py-2">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
