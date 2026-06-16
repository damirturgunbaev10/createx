// Inside pages/courses/Courses.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../../data/coursesData";

const CATEGORIES = [
  "All",
  "Marketing",
  "Management",
  "HR & Recruiting",
  "Design",
  "Development",
];

export default function CoursesCatalog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  return (
    <section className="relative w-full py-16 overflow-hidden min-h-[1200px]">
      <div className="absolute top-12 left-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-orange-100/40 to-pink-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/20 blur-3xl pointer-events-none" />

      <div className="absolute top-24 right-8 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="mx-auto px-4 md:px-0" style={{ maxWidth: "1230px" }}>
        <div className="text-center mb-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
            Enjoy your studying!
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-1">
            Our online courses
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 mb-12">
          <div className="flex flex-wrap items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-200/60 shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
            />
            <svg
              className="absolute right-3 top-3 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 justify-items-center">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              style={{ width: "390px", height: "438px" }}
            >
              <div className="relative h-56 w-full bg-amber-400 overflow-hidden flex justify-center items-end">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-48 h-48 rounded-full border border-white" />
                  <div className="absolute w-64 h-64 rounded-full border border-white" />
                </div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-[90%] object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-4 left-4 px-2.5 py-1 text-xs font-semibold rounded ${course.badgeColor}`}
                >
                  {course.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug tracking-tight group-hover:text-orange-500 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2">
                    by {course.author}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <span className="text-xl font-black text-rose-500">
                    ${course.price}
                  </span>
                  <span className="text-sm text-slate-300">|</span>
                  <span className="text-xs text-slate-500">
                    Available Online
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredCourses.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all active:scale-95"
            >
              <svg
                className="w-4 h-4 text-slate-500 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18"
                />
              </svg>
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
