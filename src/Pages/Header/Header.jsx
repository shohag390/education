import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header md:h-[90vh] h-[100%] w-full flex flex-col justify-center md:pl-[80px] py-[40px] px-[20px]">
      <h4 className="text-white md:font-bold text-1xl md:text-xl">
        WARM WELCOME TO
      </h4>
      <h1 className="md:text-5xl text-2xl md:w-[40%] md:pb-[20px] md:pt-[10px] font-bold text-white">
        Educare Where Knowledge Meets Opportunity
      </h1>
      <p className="text-white md:w-[40%] md:pb-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum
        ipsum, repellat laudantium sequi voluptatem ad!
      </p>
      <div className="flex items-center gap-[15px]">
        <button className="bg-[#49088A] md:py-[10px] py-[5px] md:px-[30px] px-[20px] text-[white] md:rounded-lg rounded-md hover:bg-white hover:text-[#49088A] duration-500">
          Geet Started
        </button>
        <button className="text-[#49088A] md:py-[10px] py-[5px] md:px-[30px] px-[20px] bg-[white] md:rounded-lg rounded-md hover:text-white hover:bg-[#49088A] duration-500">
          View Courses
        </button>
      </div>
    </div>
  );
};

export default Header;
