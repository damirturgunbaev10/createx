import React from "react";

function StudentWorkplaces() {
  return (
    <section className="w-full bg-[#F4F5F7] py-16 px-4">
      <div className="max-w-[1230px] mx-auto flex flex-col space-y-10 text-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-slate-900 uppercase block mb-2">
            Best jobs for you
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Our students work here
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center pt-4">
          {[...Array(12)].map((_, idx) => (
            <div
              key={idx}
              className="h-12 bg-white/60 border border-slate-200/50 rounded flex items-center justify-center p-2 filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase">
                Logo {idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentWorkplaces;
