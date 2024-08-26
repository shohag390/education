import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#49088A] md:px-[90px] px-[20px] pt-[30px] md:pt-[50px]">
      <div className="md:grid md:grid-cols-5 md:items-start grid grid-cols-2 md:gap-[40px] border-b-2 pb-[20px]">
        <div className="grid">
          <div className="flex gap-[5px] items-center">
            <img className="h-[50px]" src={logo} alt="logo" />
            <h4 className="text-xl font-bold text-white">EDUCARE</h4>
          </div>
          <p className="pt-[20px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi
            voluptas porro odit ipsum iure ab labore deleniti fugit doloremque.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Quick Links</h4>
          <ul className="text-white pt-[10px]">
            <li className="pb-[8px]">
              <Link to={"home"}>Home</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"about"}>About</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"courses"}>Courses</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"blog"}>Blog</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Features</h4>
          <ul className="text-white pt-[10px]">
            <li className="pb-[8px]">
              <Link to={"home"}>Jobs</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"about"}>Brand Assets</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"courses"}>Investor Relations</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"blog"}>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Resources</h4>
          <ul className="text-white pt-[10px]">
            <li className="pb-[8px]">
              <Link to={"home"}>Guides</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"about"}>Research</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"courses"}>Experts</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"blog"}>Agencies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Contact Info</h4>
          <ul className="text-white pt-[10px]">
            <li className="pb-[8px]">
              <Link to={"home"}>1737 Burapara Rd BD</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"about"}>+880 1315-390470</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"courses"}>educare@gmail.com</Link>
            </li>
            <li className="pb-[8px]">
              <Link to={"blog"}>educare.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white py-[20px] ">
        <p>Copyright &copy; 2024 By Md Shohag Hossen | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
