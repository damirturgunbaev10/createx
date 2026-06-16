import React from "react";
import AboutImg from "../../assets/AboutImg.svg";
function AboutHero() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1230px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <span className="text-xs font-bold tracking-widest text-slate-900 uppercase">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Createx Online School
          </h1>
          <p className="text-base font-bold text-slate-900 leading-relaxed">
            Createx Online School is a leader in online studying. We have lots
            of courses and programs from the main market experts.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We provide relevant approaches to online learning, internships and
            employment in the largest companies in the country. Our educational
            programs help you get a new specialty from scratch. During your
            studies, we will help you find a job. Check the courses and online
            events that we organize.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 border border-[#FF5A30] text-[#FF5A30] font-bold text-sm rounded hover:bg-[#FF5A30] hover:text-white transition-colors duration-300">
              Explore events
            </button>
            <button className="px-8 py-3.5 bg-[#FF5A30] text-white font-bold text-sm rounded hover:bg-[#e04f27] transition-colors duration-300">
              Browse courses
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center min-h-[350px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg p-6">
          <img
            src={AboutImg}
            alt="About Us Illustration"
            className="w-full h-auto max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
