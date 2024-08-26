import React from "react";
import instructor from "../../assets/data/instructor";
import "./Instructor.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Instructor = () => {
  return (
    <section className="md:px-[90px] px-[20px] md:py-[50px] py-[30px]">
      <div className="text-center">
        <h2 className="font-bold md:text-3xl text-xl md:pb-[10px] pb-[6px]">
          Professional Instructor
        </h2>
        <p className="md:px-[400px] md:pb-[60px] pb-[25px]">
          Professional educators are value-driven, guided by principles,
          passion, and a purpose bigger than themselves.
        </p>
      </div>
      <div className="md:flex md:gap-[30px] md:flex-row flex flex-col gap-[25px]">
        {instructor.map((user) => (
          <div
            key={user.id}
            className="card overflow-hidden w-[100%] md:h-[320px] h-[350px] relative"
          >
            <img
              className="instructor-img md:h-[320px] h-[350px] w-[100%] absolute"
              src={user.imageUrl}
              alt="image"
            />
            <h4 className="instructor-name absolute bottom-0 right-0 py-[10px] px-[30px] bg-[white] font-bold">
              {user.name}
            </h4>
            <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#DCE0E3] opacity-0 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center border-2 border-[#697b88] h-[90%] w-[90%]">
                <h4 className="card-text font-bold pb-[20px] uppercase text-[#697b88]">
                  {user.profession}
                </h4>
                <div className="flex items-center gap-[10px] icone">
                  <div className="md:h-[30px] h-[35px] w-[35px] md:w-[30px] rounded-full bg-[white] hover:bg-[#49088A] duration-500 hover:text-white flex justify-center items-center">
                    <FaFacebookF />
                  </div>
                  <div className="md:h-[30px] h-[35px] w-[35px] md:w-[30px] rounded-full bg-[white] hover:bg-[#49088A] duration-500 hover:text-white flex justify-center items-center">
                    <FaInstagram />
                  </div>
                  <div className="md:h-[30px] h-[35px] w-[35px] md:w-[30px] rounded-full bg-[white] hover:bg-[#49088A] duration-500 hover:text-white flex justify-center items-center">
                    <FaXTwitter />
                  </div>
                  <div className="md:h-[30px] h-[35px] w-[35px] md:w-[30px] rounded-full bg-[white] hover:bg-[#49088A] duration-500 hover:text-white flex justify-center items-center">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
