import React from "react";
import CoursesIntro from "./CoursesIntro";
import CoursesFeedback from "./CoursesFeedback";
import CoursesSubscription from "./CoursesSubscription";

const Courses = () => {
  return (
    <div>
      <CoursesIntro />
      <CoursesFeedback />
      <CoursesSubscription />
    </div>
  );
};

export default Courses;
