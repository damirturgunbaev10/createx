import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "./coursesData";

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find((item) => item.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-32 bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800">Course not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-orange-500 font-semibold hover:underline"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      <div className="bg-rose-50/60 border-b border-rose-100/50 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/20 rounded-full blur-2xl" />
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Course
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 max-w-4xl mx-auto leading-tight">
          {course.title}
        </h1>
      </div>

      <div className="max-w-[1230px] mx-auto px-4 md:px-0 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
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
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="text-rose-500 mt-0.5">✓</span>
                  <span>
                    Comprehensive industry core tactics built alongside
                    interactive test suites.
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-900">
              Course Program
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              {[1, 2, 3].map((lessonNum) => (
                <div
                  key={lessonNum}
                  className="border-b border-slate-100 last:border-none p-5 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-xs font-bold text-rose-500">
                    Lesson {lessonNum}.
                  </span>
                  <h4 className="font-semibold text-slate-800 text-sm mt-0.5">
                    Core structural implementation principles
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white border border-slate-200/80 p-8 rounded-2xl shadow-xl shadow-slate-100/50 space-y-6">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Duration
              </span>
              <p className="font-bold text-slate-800 text-lg">
                {course.duration}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Price
              </span>
              <p className="text-3xl font-black text-rose-500">
                ${course.price}
              </p>
            </div>

            <button className="w-full bg-orange-500 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/10 active:scale-[0.98]">
              Join the course
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-[1230px] mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-2xl bg-amber-400 overflow-hidden flex items-end justify-center shrink-0 shadow-md">
            <img
              src={course.image}
              alt={course.author}
              className="h-[90%] object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Course Curator
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
              {course.author}
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-3">
              Senior Industry Practitioner
            </p>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Mollis adipiscing aliquam eu proin metus a iaculis faucibus.
              Tempus curabitur venenatis vulputate elementum ante. Nisl amet
              semper semper quis commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
