import React from "react";

function WhatWeTeach() {
  const directions = [
    {
      tag: "Marketing",
      color: "bg-[#03CEA4]",
      desc: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
    },
    {
      tag: "Management",
      color: "bg-[#5A87FC]",
      desc: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
    },
    {
      tag: "HR & Recruiting",
      color: "bg-[#FA9214]",
      desc: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
    },
    {
      tag: "Design",
      color: "bg-[#F52F6E]",
      desc: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
    },
    {
      tag: "Development",
      color: "bg-[#7772F1]",
      desc: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1230px] mx-auto flex flex-col space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-slate-900 uppercase block mb-2">
            Our main directions
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            What do we teach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((dir, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-slate-100 border-b border-slate-200 flex items-center justify-center p-4 text-center">
                <span className="text-xs text-slate-400 font-medium">
                  [ Image for {dir.tag} ]
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow items-start space-y-4">
                <span
                  className={`px-2.5 py-1 text-white font-bold text-xs rounded ${dir.color}`}
                >
                  {dir.tag}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {dir.desc}
                </p>
                <button className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-[#FF5A30] transition-colors group mt-2">
                  <span>Check courses</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}

          <div className="bg-[#F4F5F7] rounded-lg flex flex-col items-center justify-center text-center p-8 min-h-[360px]">
            <span className="text-lg font-bold text-slate-700 max-w-[180px]">
              New studying program coming soon...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeTeach;
