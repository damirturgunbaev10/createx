import React from "react";
import CoursesIntro from "./CoursesIntro";
import CoursesCatalog from "./CoursesCatalog";
import CoursesFeedback from "./CoursesFeedback";
import HomeSubscription from "../home/HomeSubscription";

const Courses = () => {
  return (
    <div>
      <CoursesIntro />
      <CoursesCatalog />
      <CoursesFeedback />
      <HomeSubscription />
    </div>
  );
};

export default Courses;
