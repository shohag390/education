import React from "react";
import Principle from "../../assets/images/about.jpg";
import sign from "../../assets/images/signature.png";

const About = () => {
  return (
    <section className="bg-[white] md:px-[90px] md:py-[50px] px-[20px] py-[30px]">
      <div className="items-center border-2 md:flex">
        <div className="md:w-[50%]">
          <img className="md:w-[100%]" src={Principle} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col items-center text-center md:px-[30px] md:py-0 py-[20px]">
          <h2 className="font-bold md:text-3xl text-xl pb-[10px]">
            President's Message
          </h2>
          <p className="pb-[20px]">
            " The role of the School President is to represent undergraduate and
            postgraduate students within their School or Department, improve
            communications and cooperation among students and staff for the
            mutual benefit of both, and lead a team of Class Representatives."
          </p>
          <img className="md:h-[55px] h-[35px]" src={sign} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default About;
