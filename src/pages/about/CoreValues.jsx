import React from "react";

function CoreValues() {
  const values = [
    {
      title: "Structured Approach",
      desc: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5A30]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Professional Feedbacks",
      desc: "Culpa nostrud commodo ea consequat reprehenderit aliquip.",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5A30]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Efficiency",
      desc: "Viverra scelerisque consequat net. Adipisicing esse consequat.",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5A30]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Flexible Shedule",
      desc: "Aute eiusmod dolore dolore deserunt veniam ad deserunt.",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5A30]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1230px] mx-auto text-center flex flex-col space-y-12">
        <div>
          <span className="text-xs font-bold tracking-widest text-slate-900 uppercase block mb-2">
            We always stand for
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            Our core values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 border-r border-transparent last:border-none lg:border-slate-100"
            >
              <div className="mb-4 p-2 bg-orange-50 rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
