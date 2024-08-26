import React from "react";
import { GrCertificate } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineAddHomeWork, MdOutlinePhonelink } from "react-icons/md";
import { SiOpencv } from "react-icons/si";

const StudentDetails = () => {
  return (
    <section className="bg-[#49088A] md:flex md:justify-around md:items-center md:px-[90px] md:py-[50px] hidden">
      <div className="flex flex-col items-center text-white gap-[10px]">
        <LuCalendarDays className="md:h-[60px] md:w-[60px] text-white" />
        <p className="uppercase">Calender</p>
      </div>
      <div className="flex flex-col items-center text-white gap-[10px]">
        <GrCertificate className="md:h-[60px] md:w-[60px]" />
        <p className="uppercase">Certificate</p>
      </div>
      <div className="flex flex-col items-center text-white gap-[10px]">
        <SiOpencv className="md:h-[60px] md:w-[60px]" />
        <p className="uppercase">Creativity</p>
      </div>
      <div className="flex flex-col items-center text-white gap-[10px]">
        <MdOutlineAddHomeWork className="md:h-[60px] md:w-[60px]" />
        <p className="uppercase">Homework</p>
      </div>
      <div className="flex flex-col items-center text-white gap-[10px]">
        <MdOutlinePhonelink className="md:h-[60px] md:w-[60px]" />
        <p className="uppercase">Socialmedia</p>
      </div>
    </section>
  );
};

export default StudentDetails;
