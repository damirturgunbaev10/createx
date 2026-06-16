import React from "react";
import AboutImg2 from "../../assets/AboutImg2.png";

function VideoStats() {
  const stats = [
    { number: "1200", label: "students graduated" },
    { number: "84", label: "completed courses" },
    { number: "16", label: "qualified tutors" },
    { number: "5", label: "years of experience" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1230px] mx-auto flex flex-col space-y-16">
        <div className="flex items-center space-x-3 cursor-pointer group w-fit">
          <div className="w-11 h-11 bg-[#FF5A30] rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-slate-900 group-hover:text-[#FF5A30] transition-colors">
            Watch Video
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 w-full min-h-[400px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center p-6">
            <img
              src={AboutImg2}
              alt="Video Placeholder"
              className="w-[810px] h-auto max-w-md rounded-lg shadow-sm contain object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-baseline space-x-4">
                <span className="text-5xl font-black text-[#FF5A30] tracking-tight min-w-[110px]">
                  {stat.number}
                </span>
                <span className="text-base text-slate-800 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoStats;
