import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Instructor from "../Instructor/Instructor";
import StudentDetails from "../StudentDetails/StudentDetails";
import StaduentSay from "../StaduentSay/StaduentSay";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Header />
      <StudentDetails />
      <About />
      <Courses />
      <Instructor />
      <StaduentSay />
      <Blog />
    </div>
  );
};

export default Home;
