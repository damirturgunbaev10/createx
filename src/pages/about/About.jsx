import React from "react";
import AboutHero from "./AboutHero";
import VideoStats from "./VideoStats";
import CoreValues from "./CoreValues";
import whatWeTeach from "./WhatWeTeach";
import StudyingProcess from "./StudyingProcess";
import Team from "../home/HomeTeam";
import Feedback from "../home/HomeFeedbacks";
import StudentWorkplaces from "./StudentWorkplaces";
import Post from "../home/HomePosts";
import Subscibtion from "../home/HomeSubscription";

const About = () => {
  return (
    <div>
      <AboutHero />
      <VideoStats />
      <CoreValues />
      <whatWeTeach />
      <StudyingProcess />
      <Team />
      <Feedback />
      <StudentWorkplaces />
      <Post />
      <Subscibtion />
    </div>
  );
};

export default About;
