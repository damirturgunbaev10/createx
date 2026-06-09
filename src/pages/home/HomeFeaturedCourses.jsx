import React from "react";
import CourseCard from "../../ui/CourseCard";
import OutlineButton from "../../ui/OutLineBtn.jsx";
import CardImg1 from "../../assets/CardImg1.png";
import CardImg2 from "../../assets/CardImg2.png";
import CardImg3 from "../../assets/CardImg3.png";
import CardImg4 from "../../assets/CardImg4.png";
import CardImg5 from "../../assets/CardImg5.png";
import CardImg6 from "../../assets/CardImg6.png";
import ZoomInComponent from "../../ui/ZoomInComponent.jsx";
import { Zoom } from "swiper/modules";

const HomeFeaturedCourses = () => {
  const coursesData = [
    {
      id: 1,
      category: "Marketing",
      title: "The Ultimate Google Ads Training Course",
      price: "100",
      author: "Jerome Bell",
      badgeColor: "bg-emerald-500",
      image: CardImg1,
    },
    {
      id: 2,
      category: "Management",
      title: "Product Management Fundamentals",
      price: "480",
      author: "Marvin McKinney",
      badgeColor: "bg-indigo-600",
      image: CardImg2,
    },
    {
      id: 3,
      category: "HR & Recruiting",
      title: "HR Management and Analytics",
      price: "200",
      author: "Leslie Alexander Li",
      badgeColor: "bg-amber-600",
      image: CardImg3,
    },
    {
      id: 4,
      category: "Marketing",
      title: "Brand Management & PR Communications",
      price: "530",
      author: "Kristin Watson",
      badgeColor: "bg-emerald-500",
      image: CardImg4,
    },
    {
      id: 5,
      category: "Management",
      title: "Business Development Management",
      price: "400",
      author: "Dianne Russell",
      badgeColor: "bg-indigo-600",
      image: CardImg5,
    },
    {
      id: 6,
      category: "Design",
      title: "Graphic Design Basic",
      price: "500",
      author: "Guy Hawkins",
      badgeColor: "bg-rose-500",
      image: CardImg6,
    },
  ];

  return (
    <section className="relative w-full min-h-[854px] bg-slate-50 flex items-center justify-center py-16 overflow-hidden">
      <ZoomInComponent>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 w-full max-w-[1230px] min-h-[854px] px-6 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase block mb-1">
                Ready to Learn?
              </span>
              <h2 className="text-gray-900 font-extrabold text-3xl sm:text-4xl tracking-tight">
                Featured Courses
              </h2>
            </div>

            <div>
              <OutlineButton className="w-[230px] h-[52px]">
                View All Courses
              </OutlineButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 my-auto">
            {coursesData.map((course) => (
              <CourseCard
                key={course.id}
                category={course.category}
                title={course.title}
                price={course.price}
                author={course.author}
                badgeColor={course.badgeColor}
              >
                <img
                  src={course.image}
                  alt={course.author}
                  className="w-auto h-[100%] object-cover object-bottom"
                />
              </CourseCard>
            ))}
          </div>
        </div>
      </ZoomInComponent>
    </section>
  );
};

export default HomeFeaturedCourses;
