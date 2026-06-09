import React from "react";
import HomeIntro from "./HomeIntro";
import HomeNumbers from "./HomeNumbers";
import HomeWhyUs from "./HomeWhyUs";
import HomeFeaturedCourses from "./HomeFeaturedCourses";
import HomeBenefits from "./HomeBenefits";
import HomeEvents from "./HomeEvents";
import HomeCertificate from "./HomeCertificate";
import HomeTeam from "./HomeTeam";
import HomeFeedback from "./HomeFeedbacks";
import HomePosts from "./HomePosts";
import HomeSubscription from "./HomeSubscription";

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <HomeNumbers />
      <HomeWhyUs />
      <HomeFeaturedCourses />
      <HomeBenefits />
      <HomeEvents />
      <HomeCertificate />
      <HomeTeam />
      <HomeFeedback />
      <HomePosts />
      <HomeSubscription />
    </div>
  );
};

export default Home;
