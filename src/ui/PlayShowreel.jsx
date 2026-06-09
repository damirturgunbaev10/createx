import React, { useState } from "react";
import { Play, X } from "lucide-react";

const PlayShowreel = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVideoOpen(true)}
        className="group flex items-center gap-4 border-none bg-transparent cursor-pointer p-0"
      >
        <div className="relative w-[80px] h-[80px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FF3F3A] opacity-10 rounded-full transition-transform duration-500 ease-out group-hover:scale-110"></div>

          <div className="relative w-[52px] h-[52px] rounded-full bg-[#FF3F3A] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
            <Play fill="currentColor" size={20} className="ml-1" />
          </div>
        </div>

        <span className="font-bold text-[#1E212C] text-[16px] transition-colors duration-300 group-hover:text-[#FF3F3A]">
          Play showreel
        </span>
      </button>

      <div
        className={`fixed bottom-8 right-8 w-[320px] sm:w-[400px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          isVideoOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-100">
          <span className="font-semibold text-sm text-[#1E212C]">
            Возможности платформы
          </span>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="text-gray-400 hover:text-[#FF3F3A] transition-colors bg-transparent border-none cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative pt-[56.25%] bg-black">
          {isVideoOpen && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayShowreel;
