import React, { useState, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsGrid, BsListUl } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import EventCard from "../../ui/EventCard.jsx";

const EVENTS_MOCK_DATA = [
  {
    id: 1,
    day: "05",
    month: "August",
    timeStart: "11:00",
    timeEnd: "14:00",
    title:
      "Formation of the organizational structure of the company in the face of uncertainty.",
    type: "Online master-class",
    category: "management",
    dateTimestamp: new Date("2026-08-05"),
  },
  {
    id: 2,
    day: "24",
    month: "July",
    timeStart: "11:00",
    timeEnd: "12:30",
    title: "Building a customer service department. Best Practices.",
    type: "Online lecture",
    category: "marketing",
    dateTimestamp: new Date("2026-07-24"),
  },
  {
    id: 3,
    day: "16",
    month: "July",
    timeStart: "10:00",
    timeEnd: "13:00",
    title:
      "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
    type: "Online workshop",
    category: "design",
    dateTimestamp: new Date("2026-07-16"),
  },
  {
    id: 4,
    day: "10",
    month: "July",
    timeStart: "09:00",
    timeEnd: "14:00",
    title: "Find and evaluate: search and assessment tools for candidates.",
    type: "Online workshop",
    category: "hr",
    dateTimestamp: new Date("2026-07-10"),
  },
  {
    id: 5,
    day: "27",
    month: "June",
    timeStart: "15:00",
    timeEnd: "19:00",
    title:
      "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
    type: "Online master-class",
    category: "design",
    dateTimestamp: new Date("2026-06-27"),
  },
  {
    id: 6,
    day: "15",
    month: "June",
    timeStart: "10:00",
    timeEnd: "12:00",
    title:
      "Marketing or growth hacking: main differences and what business needs.",
    type: "Online lecture",
    category: "marketing",
    dateTimestamp: new Date("2026-06-15"),
  },
  {
    id: 7,
    day: "02",
    month: "June",
    timeStart: "11:00",
    timeEnd: "13:00",
    title:
      "How to brief a client and present your design to approve it from the first show.",
    type: "Online lecture",
    category: "design",
    dateTimestamp: new Date("2026-06-02"),
  },
  {
    id: 8,
    day: "29",
    month: "May",
    timeStart: "11:00",
    timeEnd: "12:00",
    title: "Who is a project manager and do I want to be PM?",
    type: "Online lecture",
    category: "management",
    dateTimestamp: new Date("2026-05-29"),
  },
  {
    id: 9,
    day: "18",
    month: "May",
    timeStart: "10:00",
    timeEnd: "12:00",
    title:
      "The company's business page as an additional tool to support the announcement of vacancies.",
    type: "Online lecture",
    category: "hr",
    dateTimestamp: new Date("2026-05-18"),
  },
  {
    id: 10,
    day: "12",
    month: "May",
    timeStart: "14:00",
    timeEnd: "16:00",
    title: "Advanced Scouting: Finding Dev talent overseas.",
    type: "Online master-class",
    category: "hr",
    dateTimestamp: new Date("2026-05-12"),
  },
  {
    id: 11,
    day: "04",
    month: "May",
    timeStart: "09:00",
    timeEnd: "11:00",
    title: "Introduction to Figma Variables and Design Systems.",
    type: "Online workshop",
    category: "design",
    dateTimestamp: new Date("2026-05-04"),
  },
  {
    id: 12,
    day: "22",
    month: "April",
    timeStart: "16:00",
    timeEnd: "18:00",
    title: "SEO Fundamentals for Startup Founders.",
    type: "Online lecture",
    category: "marketing",
    dateTimestamp: new Date("2026-04-22"),
  },
  {
    id: 13,
    day: "10",
    month: "April",
    timeStart: "11:00",
    timeEnd: "13:00",
    title: "Agile and Scrum methodologies inside remote teams.",
    type: "Online master-class",
    category: "management",
    dateTimestamp: new Date("2026-04-10"),
  },
];

const EventsEvents = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("list");

  const processedEvents = useMemo(() => {
    let result = [...EVENTS_MOCK_DATA];

    if (categoryFilter !== "all") {
      result = result.filter((event) => event.category === categoryFilter);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.type.toLowerCase().includes(query),
      );
    }

    result.sort((a, b) => {
      if (sortOrder === "newest") {
        return b.dateTimestamp - a.dateTimestamp;
      } else {
        return a.dateTimestamp - b.dateTimestamp;
      }
    });

    return result;
  }, [categoryFilter, searchQuery, sortOrder]);

  const totalPages = Math.ceil(processedEvents.length / itemsPerPage) || 1;
  const activePage = currentPage > totalPages ? totalPages : currentPage;

  const currentSlicedEvents = useMemo(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    return processedEvents.slice(startIndex, startIndex + itemsPerPage);
  }, [processedEvents, activePage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[1200px] bg-[#f9fbfb] flex flex-col items-center py-20 overflow-hidden">
      <div className="absolute left-4 top-10 w-28 h-40 opacity-30 bg-[radial-gradient(#f59e0b_2.5px,transparent_2.5px)] bg-[size:14px_14px] [mask-image:linear-gradient(to_bottom_right,#000,transparent)]"></div>
      <div className="absolute -right-16 bottom-60 w-56 h-56 rounded-full border-[10px] border-amber-500/5 pointer-events-none"></div>
      <div className="absolute -right-8 bottom-[270px] w-40 h-40 rounded-full border-[6px] border-amber-500/10 pointer-events-none"></div>

      <div className="w-full max-w-[1230px] px-4 flex flex-col flex-1">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">
            Our Events
          </span>
          <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl tracking-tight">
            Lectures, workshops & master-classes
          </h1>
        </div>

        <div className="w-full flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-[0.85rem] text-neutral-700 font-medium mb-8 bg-white/40 p-4 rounded-xl backdrop-blur-sm border border-neutral-100 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 whitespace-nowrap">
                Event category
              </span>
              <select
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-white border border-neutral-200 text-neutral-800 rounded px-3 py-1.5 outline-none focus:border-[#e84b30] cursor-pointer"
              >
                <option value="all">All themes</option>
                <option value="marketing">Marketing</option>
                <option value="management">Management</option>
                <option value="design">Design & Development</option>
                <option value="hr">HR & Recruiting</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-neutral-400 whitespace-nowrap">
                Sort by
              </span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-white border border-neutral-200 text-neutral-800 rounded px-3 py-1.5 outline-none focus:border-[#e84b30] cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-neutral-400 whitespace-nowrap">Show</span>
              <input
                type="number"
                min="1"
                max="20"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value) || 4);
                  setCurrentPage(1);
                }}
                className="w-12 bg-white border border-neutral-200 text-neutral-800 text-center rounded px-1.5 py-1 outline-none focus:border-[#e84b30]"
              />
              <span className="text-neutral-400 whitespace-nowrap">
                events per page
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-sm sm:flex-initial">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search event..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-white border border-neutral-200 rounded pl-3 pr-9 py-1.5 outline-none text-neutral-800 placeholder-neutral-400 focus:border-[#e84b30]"
              />
              <HiOutlineSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                size={16}
              />
            </div>

            <div className="flex items-center gap-2 text-neutral-400 shrink-0">
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "text-[#e84b30] bg-red-50" : "hover:text-neutral-600"}`}
              >
                <BsListUl size={18} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "text-[#e84b30] bg-red-50" : "hover:text-neutral-600"}`}
              >
                <BsGrid size={16} />
              </button>
            </div>
          </div>
        </div>

        {currentSlicedEvents.length === 0 ? (
          <div className="w-full py-20 text-center bg-white rounded-xl border border-dashed border-neutral-200">
            <p className="text-neutral-400 text-sm">
              No matches found matching the specified parameters.
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === "list"
                ? "flex flex-col gap-4 w-full"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            }
          >
            {currentSlicedEvents.map((event) => (
              <div
                key={event.id}
                className={viewMode === "list" ? "w-full" : "[&>div]:w-full"}
              >
                <EventCard
                  day={event.day}
                  month={event.month}
                  timeStart={event.timeStart}
                  timeEnd={event.timeEnd}
                  title={event.title}
                  type={event.type}
                  onViewMore={() => console.log(event.id)}
                />
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 mb-6 select-none font-semibold text-sm">
            {Array.from({ length: totalPages }, (_, index) => {
              const targetPage = index + 1;
              return (
                <button
                  key={targetPage}
                  onClick={() => handlePageChange(targetPage)}
                  className={`w-8 h-8 rounded flex items-center justify-center transition-all ${
                    activePage === targetPage
                      ? "text-[#e84b30] font-extrabold text-[1rem]"
                      : "text-neutral-500 hover:text-neutral-900 cursor-pointer"
                  }`}
                >
                  {targetPage}
                </button>
              );
            })}

            {activePage < totalPages && (
              <button
                onClick={() => handlePageChange(activePage + 1)}
                className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-900 cursor-pointer ml-1 transition-transform hover:translate-x-0.5"
                aria-label="Next Page"
              >
                <HiArrowLongRight size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsEvents;
