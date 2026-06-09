import React from "react";
import EventCard from "../../ui/EventCard";
import ZoomInComponent from "../../ui/ZoomInComponent";
import OrangeBtn from "../../ui/OrangeBtn";

const HomeEvents = () => {
  return (
    <section className="relative min-h-[920px] bg-[#FDDDD0]/40 py-[80px] overflow-hidden">
      <div className="absolute left-[-20px] top-[5%] pointer-events-none opacity-25 hidden sm:block">
        <div className="w-28 h-28 rounded-full border border-gray-400 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-gray-400 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-400/50"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[120px] top-[18%] pointer-events-none opacity-30 text-gray-500 font-light text-xl select-none hidden md:block">
        +
      </div>

      <div className="absolute left-[-40px] top-[30%] pointer-events-none opacity-20 grid grid-cols-4 gap-2.5">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#FF3F3A] rounded-full"></div>
        ))}
      </div>

      <div className="absolute right-[-100px] top-[15%] w-[360px] h-[360px] rounded-full border-[32px] border-[#FF3F3A]/5 pointer-events-none"></div>

      <div className="absolute left-[5%] bottom-[8%] pointer-events-none opacity-25">
        <div className="w-16 h-16 rounded-full border-4 border-gray-400 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-4 border-gray-400"></div>
        </div>
      </div>

      <ZoomInComponent>
        <div className="w-full max-w-[1230px] mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-[60px]">
            <span className="text-[#FF3F3A] font-bold text-base leading-relaxed tracking-[0.2em] uppercase block mb-2">
              Our Events
            </span>
            <h2 className="font-black text-3xl md:text-[46px] leading-[1.3] text-[#1E212C] tracking-tight">
              Lectures & workshops
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg rounded-md">
              <EventCard
                day={5}
                month="August"
                timeStart="11:00"
                timeEnd="14:00"
                title="Formation of the organizational structure of the company in the face of uncertainty."
                type="Online master-class"
                onViewMore={() => console.log("View more clicked")}
              />
            </div>

            <div className="transform transition-all duration-500 delay-75 hover:-translate-y-1 hover:shadow-lg rounded-md">
              <EventCard
                day={24}
                month="July"
                timeStart="11:00"
                timeEnd="12:30"
                title="Building a customer service department. Best Practices."
                type="Online lecture"
                onViewMore={() => console.log("View more clicked")}
              />
            </div>

            <div className="transform transition-all duration-500 delay-150 hover:-translate-y-1 hover:shadow-lg rounded-md">
              <EventCard
                day={16}
                month="July"
                timeStart="10:00"
                timeEnd="13:00"
                title="How to apply methods of speculative design in practice. Worldbuilding prototyping."
                type="Online workshop"
                onViewMore={() => console.log("View more clicked")}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-[80px] text-center sm:text-left">
            <h3 className="font-bold text-2xl md:text-[28px] leading-[1.5] text-[#1E212C]">
              Do you want more?
            </h3>

            <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
              <OrangeBtn className="w-[214px] h-[52px] shadow-md hover:shadow-[#FF3F3A]/20">
                Explore all events
              </OrangeBtn>
            </div>
          </div>
        </div>
      </ZoomInComponent>
    </section>
  );
};

export default HomeEvents;
