import { useState } from "react";
import { Link } from "react-router-dom";
import OrangeBtn from "../../ui/OrangeBtn";
import ZoonInComponent from "../../ui/ZoomInComponent";
import HomePost1 from "../../assets/HomePosts1.svg";
import HomePost2 from "../../assets/HomePosts2.svg";
import HomePost3 from "../../assets/HomePosts3.svg";

const POSTS = [
  {
    id: 1,
    type: "Podcast",
    typeIcon: "🎙",
    category: "Marketing",
    date: "September 4, 2020",
    duration: "36 min",
    title: "What is traffic arbitrage and does it really make money?",
    excerpt:
      "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    cta: "Listen",
    to: "/blog",
    bgColor: "#D6E9F8",
    image: HomePost1,
  },
  {
    id: 2,
    type: "Video",
    typeIcon: "▶",
    category: "Management",
    date: "August 25, 2020",
    duration: "45 min",
    title:
      "What to do and who to talk to if you want to get feedback on the product",
    excerpt:
      "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
    cta: "Watch",
    to: "/blog/product-feedback",
    bgColor: "#C8EDE3",
    image: HomePost2,
  },
  {
    id: 3,
    type: "Article",
    typeIcon: "📄",
    category: "Design",
    date: "August 8, 2020",
    duration: null,
    title:
      "Should you choose a creative profession if you are attracted to creativity?",
    excerpt:
      "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
    cta: "Read",
    to: "/blog/creative-profession",
    bgColor: "#F5F0C0",
    image: HomePost3,
  },
];

const BLOG_HREF = "/blog";

function TypeBadge({ icon, label }) {
  return (
    <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-700">
      <span className="text-[11px]">{icon}</span>
      {label}
    </span>
  );
}

function Meta({ category, date, duration }) {
  return (
    <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500">
      <span className="text-[13px] font-bold text-gray-900">{category}</span>
      <span className="text-gray-300">|</span>
      <span className="inline-flex items-center gap-1">
        <CalendarIcon /> {date}
      </span>
      {duration && (
        <>
          <span className="text-gray-300">|</span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon /> {duration}
          </span>
        </>
      )}
    </div>
  );
}

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="flex flex-col w-[390px] h-[507px] flex-shrink-0 transition-transform duration-200 cursor-pointer"
      style={{ transform: hovered ? "translateY(-3px)" : "translateY(0)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full h-[185px] rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ background: post.bgColor }}
      >
        <TypeBadge icon={post.typeIcon} label={post.type} />
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs text-black/35 border border-dashed border-black/20 rounded px-3 py-1.5">
            Place image here
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 pt-5 gap-2.5">
        <Meta
          category={post.category}
          date={post.date}
          duration={post.duration}
        />

        <h3 className="text-[18px] font-bold text-gray-900 leading-snug m-0">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed m-0">
          {post.excerpt}
        </p>

        <Link
          to={post.to}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 no-underline mt-10 hover:text-[#E84D20] transition-colors duration-150"
        >
          {post.cta}
          <ArrowIcon hovered={hovered} />
        </Link>
      </div>
    </article>
  );
}

export default function LatestPosts() {
  return (
    <section className="">
      <ZoonInComponent>
        <div className="w-[1230px] h-[659px] flex flex-col overflow-hidden mx-auto px-4 gap-10">
          <div className="h-[92px] flex items-center justify-between flex-shrink-0">
            <div>
              <p className="m-0 mb-1 text-[11px] font-semibold tracking-[1.5px] uppercase text-gray-500">
                OUR BLOG
              </p>
              <h2 className="m-0 text-[36px] font-bold text-gray-900 leading-none">
                Latest posts
              </h2>
            </div>

            <OrangeBtn className="width-[158px] height-[52px]">
              Go to blog
            </OrangeBtn>
          </div>

          <div className="flex flex-1 h-[567px] justify-between">
            {POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </ZoonInComponent>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <rect
        x="1"
        y="3"
        width="14"
        height="12"
        rx="2"
        stroke="#888"
        strokeWidth="1.5"
      />
      <path
        d="M5 1v4M11 1v4M1 7h14"
        stroke="#888"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <circle cx="8" cy="8" r="6.5" stroke="#888" strokeWidth="1.5" />
      <path
        d="M8 4.5V8l2.5 2"
        stroke="#888"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ hovered }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200"
      style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="#E84D20"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
