import React from "react";

const CourseCard = ({
  category,
  title,
  price,
  author,
  badgeColor = "bg-emerald-500",
  children,
}) => {
  return (
    <a
      href="/courses"
      className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-200 group cursor-pointer"
    >
      <div className="relative w-full sm:w-[200px] h-[214px] sm:h-auto bg-amber-400 flex items-end justify-center overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border-4 border-white"></div>
          <div className="absolute w-28 h-28 rounded-full border-4 border-white"></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-end justify-center transition-transform duration-300 group-hover:scale-105">
          {children}
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow bg-white">
        <div>
          <span
            className={`inline-block text-[11px] font-semibold tracking-wide text-white px-2.5 py-1 rounded mb-3 ${badgeColor}`}
          >
            {category}
          </span>

          <h3 className="text-gray-900 font-bold text-lg leading-snug line-clamp-2 group-hover:text-amber-500 transition-colors duration-200">
            {title}
          </h3>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-1.5 text-sm">
          <span className="text-red-500 font-bold">${price}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">by {author}</span>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
