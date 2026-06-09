import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import ZoomInComponent from "../../ui/ZoomInComponent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
    name: "Eleanor Pena",
    role: "Position, Course",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Guy Hawkins",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: 3,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    name: "Kristin Watson",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: 4,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Ut enim ad minima veniam, quis nostrum.",
    name: "Cameron Williamson",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
  },
  {
    id: 5,
    text: "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui.",
    name: "Jane Cooper",
    role: "QA Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256",
  },
];

export default function HomeFeedback() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full bg-[#F4F5F7] py-16 px-4 overflow-hidden flex items-center justify-center min-h-[556px]">
      <ZoomInComponent>
        <div className="absolute left-6 top-10 pointer-events-none opacity-40 hidden md:block">
          <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-gray-300 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="absolute left-6 bottom-10 pointer-events-none opacity-30 grid grid-cols-5 gap-2 hidden md:grid">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
        <div className="absolute right-6 bottom-4 pointer-events-none opacity-40 hidden md:block">
          <div className="w-32 h-32 rounded-full border-[12px] border-gray-200/60 border-t-transparent border-l-transparent -rotate-45"></div>
        </div>

        <div className="w-full max-w-[1230px] flex flex-col items-center justify-between min-h-[480px] md:min-h-[556px] relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8 relative">
            <span className="text-xs font-bold tracking-[0.2em] text-[#1E212C] uppercase block mb-2">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-[40px] font-black text-[#1E212C] tracking-tight relative inline-block">
              What our students say
              <span className="absolute -right-16 top-1/2 -translate-y-1/2 flex space-x-1 opacity-20 hidden sm:flex">
                <span className="w-3 h-6 border-y-4 border-r-4 border-gray-600 rounded-r-full"></span>
                <span className="w-3 h-6 border-y-4 border-r-4 border-gray-600 rounded-r-full"></span>
                <span className="w-3 h-6 border-y-4 border-r-4 border-gray-600 rounded-r-full"></span>
              </span>
            </h2>
          </div>

          <div className="w-full flex items-center justify-between relative px-0 md:px-12">
            {/* Left Arrow */}
            <button
              ref={prevRef}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-[#424551] hover:bg-[#FF3F3A] hover:text-white hover:shadow-md active:scale-95 transition-all duration-300 z-20 focus:outline-none mr-6 lg:mr-10"
              aria-label="Previous slide"
            >
              <HiArrowLeft className="w-6 h-6" />
            </button>

            <div className="w-full max-w-[1020px] min-h-[344px] bg-white rounded-md shadow-[0_80px_80px_-20px_rgba(30,33,44,0.04),0_30px_30px_-10px_rgba(30,33,44,0.02)] border border-gray-100 p-6 sm:p-10 md:p-16 mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  bulletClass: "custom-bullet",
                  bulletActiveClass: "custom-bullet-active",
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="h-full"
              >
                {testimonialsData.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="flex flex-col justify-between h-full select-none"
                  >
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <FaQuoteLeft className="text-[#FF3F3A] w-6 h-6 md:w-7 md:h-7 shrink-0 mt-1" />

                      <p className="text-[#424551] text-sm sm:text-base md:text-[20px] leading-relaxed md:leading-[160%] font-normal">
                        {slide.text}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 mt-8 pl-10 md:pl-13">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-full object-cover border border-gray-100 shadow-sm"
                        draggable="false"
                      />
                      <div>
                        <h4 className="text-[#1E212C] font-bold text-sm md:text-base">
                          {slide.name}
                        </h4>
                        <p className="text-[#787A80] text-xs md:text-sm mt-0.5">
                          {slide.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              ref={nextRef}
              className="absolute right-4 top-1/2 -translate-y-1/2 md:translate-y-0 md:static flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-[#424551] hover:bg-[#FF3F3A] hover:text-white hover:shadow-md active:scale-95 transition-all duration-300 z-20 focus:outline-none ml-6 lg:ml-10"
              aria-label="Next slide"
            >
              <HiArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="custom-pagination flex items-center justify-center gap-3 mt-10 z-20"></div>
        </div>

        <style>{`
        .custom-pagination .custom-bullet {
          width: 30px;
          height: 3px;
          background-color: #B3B7BC;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
          display: inline-block;
        }
        .custom-pagination .custom-bullet-active {
          background-color: #424551;
          width: 40px;
        }
      `}</style>
      </ZoomInComponent>
    </section>
  );
}
