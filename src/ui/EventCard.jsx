import React from "react";
import OutlineBtn from "../ui/OutLineBtn.jsx";

const EventCard = ({
  day = "01",
  month = "January",
  timeStart = "10:00",
  timeEnd = "12:00",
  title = "Event Title",
  type = "Online event",
  onViewMore,
  button,
  isGridView = false,
}) => {
  const formattedDay = String(day).padStart(2, "0");

  return (
    <div
      className={`
        w-full
        group
        flex
        bg-white
        border border-[#fde8e4]
        rounded-xl
        cursor-default
        transition-all duration-200 ease-in-out
        hover:border-[#f4836a]
        hover:shadow-[0_6px_28px_rgba(234,88,60,0.10)]
        hover:-translate-y-0.5
        ${
          isGridView
            ? "flex-col items-start p-6 min-h-[270px] justify-between"
            : "flex-row items-center gap-6 px-6 py-5"
        }
      `}
    >
      <div
        className={`flex ${isGridView ? "w-full justify-between items-center mb-4" : "items-center gap-6 shrink-0"}`}
      >
        <div className="flex flex-col items-center min-w-[52px] shrink-0">
          <span className="text-[2.4rem] font-bold leading-none tracking-tight text-[#e84b30] transition-colors duration-200 group-hover:text-[#c93a21]">
            {formattedDay}
          </span>
          <span className="text-[0.75rem] font-semibold text-neutral-800 uppercase tracking-wider mt-0.5">
            {month}
          </span>
        </div>

        {!isGridView && (
          <div className="w-px h-12 shrink-0 rounded-full bg-[#f0d5d0] transition-colors duration-200 group-hover:bg-[#f4a090]" />
        )}

        <p className="text-[0.75rem] font-medium text-neutral-400 whitespace-nowrap tracking-wide">
          {timeStart} - {timeEnd}
        </p>
      </div>

      <div className={`flex-1 min-w-0 ${isGridView ? "w-full mb-6" : ""}`}>
        <p className="text-[0.95rem] font-bold text-neutral-900 leading-snug mb-1 transition-colors duration-200 group-hover:text-[#e84b30] line-clamp-3">
          {title}
        </p>
        <p className="text-[0.75rem] font-normal text-neutral-400">{type}</p>
      </div>

      <div className={isGridView ? "w-full" : "shrink-0"}>
        {button ? (
          button
        ) : (
          <OutlineBtn
            className={`${isGridView ? "w-full" : "w-[120px]"} h-[40px] shrink-0`}
            onClick={onViewMore}
          >
            View more
          </OutlineBtn>
        )}
      </div>
    </div>
  );
};

export default EventCard;
