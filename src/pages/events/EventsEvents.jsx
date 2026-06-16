import React, { useState, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsGrid, BsListUl } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import EventCard from "../../ui/EventCard.jsx";
import ZoomInComponent from "../../ui/ZoomInComponent.jsx";
import { EVENTS_MOCK_DATA } from "../../data/eventsData.js";
import { useNavigate } from "react-router-dom";

const EventsEvents = () => {
  const navigate = useNavigate();

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

  const totalPages = useMemo(() => {
    const limit = itemsPerPage > 0 ? itemsPerPage : 1;
    return Math.ceil(processedEvents.length / limit) || 1;
  }, [processedEvents.length, itemsPerPage]);

  const activePage = useMemo(() => {
    if (currentPage > totalPages) return totalPages;
    if (currentPage < 1) return 1;
    return currentPage;
  }, [currentPage, totalPages]);

  const currentSlicedEvents = useMemo(() => {
    const limit = itemsPerPage > 0 ? itemsPerPage : 1;
    const startIndex = (activePage - 1) * limit;
    return processedEvents.slice(startIndex, startIndex + limit);
  }, [processedEvents, activePage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(isNaN(val) ? "" : val);
    setCurrentPage(1);
  };

  return (
    <section className="relative w-full min-h-[1200px] bg-[#f9fbfb] flex flex-col items-center py-20 overflow-hidden">
      <ZoomInComponent>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>

        <div className="absolute left-4 top-16 w-28 h-40 opacity-30 bg-[radial-gradient(#f59e0b_2.5px,transparent_2.5px)] bg-[size:14px_14px] [mask-image:linear-gradient(to_bottom_right,#000,transparent)]"></div>
        <div className="absolute -right-16 bottom-60 w-56 h-56 rounded-full border-[10px] border-amber-500/5 pointer-events-none"></div>
        <div className="absolute -right-8 bottom-[270px] w-40 h-40 rounded-full border-[6px] border-amber-500/10 pointer-events-none"></div>

        <div className="w-full max-w-[1230px] px-4 flex flex-col flex-1 relative z-10">
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
                  max="40"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
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
                <div key={event.id} className="w-full">
                  <EventCard
                    day={event.day}
                    month={event.month}
                    timeStart={event.timeStart}
                    timeEnd={event.timeEnd}
                    title={event.title}
                    type={event.type}
                    isGridView={viewMode === "grid"}
                    onViewMore={() => navigate(`/events/${event.id}`)}
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
      </ZoomInComponent>
    </section>
  );
};

export default EventsEvents;
