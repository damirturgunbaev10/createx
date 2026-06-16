import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ZoomInComponent from "../../ui/ZoomInComponent.jsx";
import EventCard from "../../ui/EventCard.jsx";
import { EVENTS_MOCK_DATA } from "../../data/eventsData.js";
import SingleEventImg from "../../assets/SIngleEventImg.svg";

const EventSinglePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const currentEvent = useMemo(() => {
    return (
      EVENTS_MOCK_DATA.find((item) => item.id === Number(id)) ||
      EVENTS_MOCK_DATA[0]
    );
  }, [id]);

  const [activeTheme, setActiveTheme] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const eventDetails = {
    themes: [
      {
        id: 1,
        title: "Theme 1. Aliquet lectus urna viverra in odio.",
        content:
          "Nulla amet, sagittis potenti rhoncus ut. Et lectus nec elementum, ac dolor, enim, amet. Dictum facilisis nisl sed tristique velis. Ultrices risus, odio in suscipit erat. Curabitur faucibus sem tristique veli lectus, leo sed rhoncus. Commodo nunc, vitae ac elementum.",
      },
      {
        id: 2,
        title: "Theme 2. Orci commodo, viverra orci mollis ut euismod.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed diam sapien. Sed convallis lectus vitae nisi placerat, a tempor justo sodales.",
      },
      {
        id: 3,
        title:
          "Theme 3. Sagittis vitae facilisi rutrum amet mauris quisque vel.",
        content:
          "Morbi non sollicitudin lectus. Phasellus elementum laoreet elementum. Vestibulum sit amet finibus lorem, ut tincidunt diam.",
      },
      {
        id: 4,
        title: "Theme 4. In id dolor quis nunc, urna hendrerit pharetra.",
        content:
          "Aenean feugiat, ante id interdum tristique, magna erat hendrerit dolor, vel scelerisque nisl lorem at erat.",
      },
    ],
    speaker: {
      name: "Kathryn Murphy",
      role: "Analyst and Marketing specialist in IT company",
      bio: "Mauris, sit amet, tinto elementum velis ac iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum nec. Nisi, sed id tempor tempor tempor commodo, consequat. Massa rhoncus donec sit. Aliquam id nisl elementum sed diam. Sem vulputate mauris lorem sit massa uci pharetra. At convallis platea habitasse enim. Nullam sit mi, lorem posuere sem. Nam vel aliquam tristique sollicitudin in pretium ipsum.",
      companyLogos: ["InSync", "GlobalConsult", "National"],
    },
    benefits: [
      "Specialists with more than 1 year of active work experience",
      "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
      "Professional designers who want to feel more confident in UX",
    ],
  };

  const [carouselPage, setCarouselPage] = useState(1);
  const itemsPerCarouselPage = 3;

  const filteredSuggestions = useMemo(() => {
    return EVENTS_MOCK_DATA.filter((item) => item.id !== currentEvent.id);
  }, [currentEvent.id]);

  const totalCarouselPages = Math.ceil(
    filteredSuggestions.length / itemsPerCarouselPage,
  );

  const currentCarouselEvents = useMemo(() => {
    const start = (carouselPage - 1) * itemsPerCarouselPage;
    return filteredSuggestions.slice(start, start + itemsPerCarouselPage);
  }, [filteredSuggestions, carouselPage]);

  return (
    <div className="w-full bg-white font-sans text-neutral-800">
      <section className="w-full bg-[#FEDBD3] py-16 sm:py-24 border-b border-neutral-100 relative overflow-hidden">
        <div className="absolute left-6 top-10 text-neutral-200/40 text-4xl"></div>
        <div className="absolute right-10 bottom-4 text-neutral-200/40 text-6xl">
          <i className="ri-shining-line"></i>
        </div>

        <div className="max-w-[1230px] mx-auto px-4 text-center relative z-10">
          <span className="text-[12px] font-bold tracking-widest text-[#e84b30] uppercase block mb-3">
            {currentEvent.type}
          </span>
          <h1 className="text-gray-900 font-black text-2xl sm:text-4xl max-w-4xl mx-auto leading-tight">
            {currentEvent.title}
          </h1>
        </div>
      </section>

      <section className="max-w-[1230px] mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">
              We will talk about:
            </h2>
            <div className="space-y-4">
              {eventDetails.themes.map((theme) => {
                const isOpen = activeTheme === theme.id;
                return (
                  <div
                    key={theme.id}
                    className="border-b border-neutral-100 pb-4"
                  >
                    <button
                      onClick={() => setActiveTheme(isOpen ? null : theme.id)}
                      className="w-full flex items-start gap-3 text-left font-bold text-[1rem] transition-colors text-neutral-800 hover:text-[#e84b30]"
                    >
                      <i
                        className={`text-[#e84b30] mt-0.5 text-lg shrink-0 ${isOpen ? "ri-subtract-line" : "ri-add-line"}`}
                      ></i>
                      <span>{theme.title}</span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 pl-7 text-sm text-neutral-500 leading-relaxed transition-all duration-300">
                        {theme.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">
              Speaker
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">
              {eventDetails.speaker.name}
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-48 h-48 bg-amber-400 rounded-lg overflow-hidden shrink-0 relative shadow-sm">
                <div className="w-full h-full flex items-center justify-center text-white bg-neutral-200">
                  <i className="ri-user-3-line text-5xl text-neutral-400"></i>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <h4 className="font-semibold text-neutral-700 text-sm">
                  {eventDetails.speaker.role}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {eventDetails.speaker.bio}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-4 text-neutral-400 font-bold tracking-wider text-xs uppercase grayscale opacity-60">
                    {eventDetails.speaker.companyLogos.map((logo, i) => (
                      <span key={i}>{logo}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-neutral-500">
                    <a
                      href="#"
                      className="hover:text-[#e84b30] transition-colors"
                    >
                      <i className="ri-facebook-fill text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#e84b30] transition-colors"
                    >
                      <i className="ri-instagram-line text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#e84b30] transition-colors"
                    >
                      <i className="ri-twitter-x-fill text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#e84b30] transition-colors"
                    >
                      <i className="ri-linkedin-box-fill text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">
              For Whom?
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-4">
              Who will benefit from the event:
            </h2>
            <ul className="space-y-3">
              {eventDetails.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-neutral-600 leading-normal"
                >
                  <i className="ri-checkbox-circle-line text-[#e84b30] text-lg mt-0.5 shrink-0"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-100 p-6 shadow-xl shadow-neutral-100/70 sticky top-6 space-y-6">
          <div>
            <span className="text-neutral-400 text-xs font-bold block mb-1">
              TIME
            </span>
            <p className="text-[#e84b30] font-extrabold text-[1.1rem]">
              {currentEvent.month} {currentEvent.day}, {currentEvent.timeStart}{" "}
              – {currentEvent.timeEnd}
            </p>
            <span className="text-neutral-400 text-xs block mt-0.5">
              Metros target of current hours, local standard time.
            </span>
          </div>

          <div>
            <span className="text-neutral-400 text-xs font-bold block mb-1">
              PRICE
            </span>
            <p className="text-gray-900 font-black text-xl">Free</p>
            <span className="text-neutral-400 text-xs block mt-0.5">
              Nulla mi vel adipiscing adipiscing felis fringilla.
            </span>
          </div>

          <a
            href="#"
            className="text-[#e84b30] text-xs font-bold underline flex items-center gap-1 hover:text-neutral-900 transition-colors"
          >
            Event on Facebook <i className="ri-arrow-right-up-line"></i>
          </a>

          <div className="w-full pt-2">
            <a
              href="#registration-form"
              className="w-full h-11 bg-[#e84b30] text-white font-bold rounded-lg flex items-center justify-center hover:bg-[#d13b22] transition-colors tracking-wide text-sm shadow-md shadow-red-500/10"
            >
              Join the event
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fddfdc]/30 py-12 border-y border-neutral-100">
        <div className="max-w-[1230px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:block text-5xl text-[#e84b30]">
              <i className="ri-mail-open-line"></i>
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-neutral-900">
                Don't want to miss the best events?
              </h3>
              <p className="text-sm text-neutral-500">
                Subscribe to our newsletter!
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <input
              type="email"
              placeholder="Your working email"
              className="px-4 py-2 text-sm bg-white border border-neutral-200 rounded-lg outline-none min-w-[260px] focus:border-[#e84b30]"
            />
            <button className="px-6 py-2 bg-[#e84b30] text-white font-bold rounded-lg text-sm hover:bg-[#d13b22] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section
        id="registration-form"
        className="max-w-[1230px] mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">
              Don't miss the event
            </span>
            <h2 className="text-3xl font-black text-neutral-900">
              Leave a request
            </h2>
          </div>

          <div className="w-[1130px]  flex justify-between align-center">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 max-w-md"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:bg-white focus:border-[#e84b30]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your working email"
                  className="px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:bg-white focus:border-[#e84b30]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-500">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:bg-white focus:border-[#e84b30]"
                />
              </div>

              <div className="pt-2">
                <button className="w-full h-11 bg-[#e84b30] text-white font-bold rounded-lg text-sm hover:bg-[#d13b22] transition-colors">
                  Join the event
                </button>
                <p className="text-[10px] text-neutral-400 mt-2 leading-relaxed">
                  * You will receive a link to the online lecture in an email
                  after registration.
                </p>
              </div>
            </form>

            <img src={SingleEventImg} alt="SingleEventImg" />
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="w-80 h-80 relative flex items-center justify-center text-neutral-200">
            <i className="ri-computer-line text-[14rem] text-neutral-100 absolute"></i>
            <i className="ri-team-line text-7xl text-[#e84b30]/80 relative z-10"></i>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50/70 border-t border-neutral-100 py-20">
        <div className="max-w-[1230px] mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">
                Check other online events
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
                You may be interested in
              </h2>
            </div>

            {totalCarouselPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCarouselPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={carouselPage === 1}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${carouselPage === 1 ? "border-neutral-200 text-neutral-300 cursor-not-allowed" : "border-neutral-300 text-neutral-700 hover:bg-[#e84b30] hover:text-white hover:border-[#e84b30]"}`}
                >
                  <i className="ri-arrow-left-line text-lg"></i>
                </button>
                <button
                  onClick={() =>
                    setCarouselPage((prev) =>
                      Math.min(prev + 1, totalCarouselPages),
                    )
                  }
                  disabled={carouselPage === totalCarouselPages}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${carouselPage === totalCarouselPages ? "border-neutral-200 text-neutral-300 cursor-not-allowed" : "border-neutral-300 text-neutral-700 hover:bg-[#e84b30] hover:text-white hover:border-[#e84b30]"}`}
                >
                  <i className="ri-arrow-right-line text-lg"></i>
                </button>
              </div>
            )}
          </div>

          <ZoomInComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCarouselEvents.map((event) => (
                <div
                  key={event.id}
                  className="w-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <EventCard
                    day={event.day}
                    month={event.month}
                    timeStart={event.timeStart}
                    timeEnd={event.timeEnd}
                    title={event.title}
                    type={event.type}
                    isGridView={true}
                    onViewMore={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                </div>
              ))}
            </div>
          </ZoomInComponent>

          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="font-bold text-neutral-800 text-sm">
              Do you want more?
            </span>
            <Link
              to="/events"
              className="px-6 h-11 bg-[#e84b30] text-white font-bold rounded-lg text-sm flex items-center justify-center hover:bg-[#d13b22] transition-colors"
            >
              Explore all events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventSinglePage;
