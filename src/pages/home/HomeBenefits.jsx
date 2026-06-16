import React, { useState } from "react";
import HomeBenefitsImg from "../../assets/HomeBenefitsImg.svg";
import ZoomInComponent from "../../ui/ZoomInComponent";

import {
  RiStarLine,
  RiThumbUpLine,
  RiStackLine,
  RiChat1Line,
} from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";

const TabButton = ({ isActive, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-8 py-3 text-base font-bold transition-all duration-300 border-b-2 relative focus:outline-none whitespace-nowrap ${
      isActive
        ? "border-[#FF3F3A] text-[#FF3F3A]"
        : "border-transparent text-[#9A9CA5] hover:text-[#424551]"
    }`}
  >
    <Icon
      className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
    />
    {label}
  </button>
);

export default function HomeBenefits() {
  const [activeTab, setActiveTab] = useState("tutors");

  const tabs = [
    { id: "tutors", label: "Experienced Tutors", icon: RiStarLine },
    { id: "feedback", label: "Feedback & Support", icon: RiThumbUpLine },
    { id: "library", label: "24/7 Online Library", icon: RiStackLine },
    { id: "community", label: "Community", icon: RiChat1Line },
  ];

  const tabContent = {
    tutors: {
      title: "Only practicing tutors",
      text: "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
    },
    feedback: {
      title: "Feedback & Support",
      text: "Our dedicated support team and mentors are available to guide you through every step. Receive detailed code reviews, constructive feedback, and answers to your questions to ensure you never get stuck on your learning journey.",
    },
    library: {
      title: "24/7 Online Library",
      text: "Gain unlimited access to a comprehensive repository of resources, documentation, and recorded lectures. Study at your own pace, anytime, anywhere, with materials curated by industry professionals.",
    },
    community: {
      title: "Community & Networking",
      text: "Connect with like-minded peers, collaborate on real-world projects, and expand your professional network. Join our active chat channels, community events, and forums to grow alongside other ambitious developers.",
    },
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-[120px] overflow-hidden">
      <div className="absolute left-4 bottom-[15%] pointer-events-none opacity-[0.15] grid grid-cols-4 gap-2.5 hidden xl:grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
        ))}
      </div>

      <ZoomInComponent>
        <div className="w-full max-w-[1230px] mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-10">
            <span className="text-[#1E212C] font-bold text-base leading-relaxed tracking-[0.2em] uppercase block mb-2">
              Our Benefits
            </span>
            <h2 className="font-black text-3xl md:text-[46px] leading-[1.3] text-[#1E212C] tracking-tight">
              That’s how we do it
            </h2>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar border-b border-gray-200 flex items-center justify-start md:justify-between mb-16 gap-2">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                icon={tab.icon}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full min-h-[380px]">
            <div
              key={activeTab}
              className="flex flex-col justify-center max-w-xl animate-fadeIn transform transition-all duration-300"
            >
              <h3 className="text-2xl md:text-[32px] font-black text-[#1E212C] mb-6 tracking-tight leading-tight">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-[#424551] text-base md:text-[16px] leading-[160%] font-normal">
                {tabContent[activeTab].text}
              </p>
            </div>

            <div className="w-full flex items-center justify-center relative select-none pointer-events-none">
              <div className="absolute w-[80%] h-[80%] bg-[#FF3F3A]/5 rounded-full filter blur-3xl -z-10"></div>

              <img
                src={HomeBenefitsImg}
                alt="Benefits Graphic representation"
                className="w-full max-w-[490px] h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </ZoomInComponent>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
