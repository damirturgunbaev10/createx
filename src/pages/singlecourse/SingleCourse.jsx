import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";

import OrangeBtn from "../../ui/OrangeBtn";
import OutLineBtn from "../../ui/OutLineBtn.jsx";
import Feedback from "../../pages/home/HomeFeedbacks.jsx";
import Intro from "../../pages/courses/CoursesIntro.jsx";

export default function SingleCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="max-w-[1230px] mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Course Not Found</h2>
        <p className="text-slate-400 mt-2">
          The targeted item parameter context could not load.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="mt-4 text-orange-500 font-bold underline"
        >
          Return to Courses
        </button>
      </div>
    );
  }

  const relatedCourses = coursesData
    .filter((item) => item.id !== course.id)
    .slice(0, 2);

  return (
    <div className="w-full bg-white text-slate-900 font-sans overflow-hidden">
      <Intro title={course.title} />

      <div className="max-w-[1230px] mx-auto px-4 md:px-0 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        {/* Left Column Text Info blocks */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              About the course
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {course.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              You will learn:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
                "Vulputate placerat amet pulvinar lorem nisl.",
                "Consequat feugiat habitant gravida quisque elit bibendum.",
                "Etiam duis lobortis in fames ultrices commodo nibh.",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1 relative">
          <div className="lg:absolute lg:-top-32 right-0 w-full bg-white border border-slate-200/80 p-8 rounded-2xl shadow-xl shadow-slate-200/50 space-y-6 z-10">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase block mb-1">
                Dates
              </span>
              <p className="font-bold text-slate-800">Sept 7 – Nov 2</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase block mb-1">
                Duration
              </span>
              <p className="font-bold text-slate-800">{course.duration}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase block mb-1">
                Price
              </span>
              <p className="text-3xl font-black text-rose-500">
                ${course.price}
              </p>
            </div>
            <OrangeBtn className="w-full py-4 text-center">
              Join the course
            </OrangeBtn>
          </div>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto px-4 md:px-0 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-56 h-64 bg-amber-400 rounded-2xl overflow-hidden flex items-end justify-center shrink-0 relative shadow-inner">
          <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none" />
          <img
            src={course.image}
            alt={course.author}
            className="h-[92%] object-contain filter drop-shadow-md"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Course Curator
          </span>
          <h3 className="text-3xl font-black text-slate-900 mt-1">
            {course.author}
          </h3>
          <p className="text-sm text-orange-500 font-medium mb-4">
            Senior Designer & Industry Expert
          </p>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Mollis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus
            curabitur venenatis vulputate elementum ante. Nisl amet semper
            semper quis commodo.
          </p>
        </div>
      </div>

      <div className="w-full bg-slate-50 py-20 border-t border-b border-slate-100">
        <div className="max-w-[1230px] mx-auto px-4 md:px-0 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Main Steps
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1 mb-12">
            Online learning process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                num: "01",
                title: "Watching online video lectures",
                desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
              },
              {
                num: "02",
                title: "Passing interactive test modules",
                desc: "Anim reprehenderit sint voluptate exercitation aliquip.",
              },
              {
                num: "03",
                title: "Curator's personal feedback",
                desc: "Adipiscing esse aliquip aliquet amet. Auctor euismod dolore.",
              },
              {
                num: "04",
                title: "Corrections if needed",
                desc: "Sit veniam aute dolore adipisc elit culpa minim mollit.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative group space-y-2">
                <span className="text-4xl font-black text-slate-200 group-hover:text-orange-200 transition-colors duration-200">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-slate-800">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Feedback />

      <div className="w-full py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1230px] mx-auto px-4 md:px-0">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Check other courses
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">
                You may also like
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                ←
              </button>
              <button className="p-2.5 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {relatedCourses.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/courses/${item.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full max-w-[590px] h-[240px] bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex overflow-hidden cursor-pointer group"
              >
                <div className="w-44 bg-amber-400 h-full flex items-end justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[85%] object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded ${item.badgeColor}`}
                    >
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 mt-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      by {item.author}
                    </p>
                  </div>
                  <div className="text-base font-black text-rose-500">
                    ${item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-16 pt-8 border-t border-slate-100">
            <span className="font-bold text-slate-800 text-sm">
              Do you want more courses?
            </span>
            <OutLineBtn
              text="View all courses"
              onClick={() => navigate("/courses")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
