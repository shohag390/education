import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const links = [
  {
    link: "home",
    name: "Home",
  },
  {
    link: "about",
    name: "About",
  },
  {
    link: "courses",
    name: "Courses",
  },
  {
    link: "testimonial",
    name: "Testimonial",
  },
  {
    link: "blog",
    name: "Blog",
  },
  {
    link: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="md:h-[10vh] w-full bg-[#49088A] md:px-[80px] px-[20px] md:flex md:justify-between md:items-center sticky top-0 left-0 z-50">
      <div className="flex items-center gap-[2px]">
        <img className="md:h-[60px] h-[40px]" src={logo} alt="logo" />
        <h4 className="font-bold text-white md:text-xl">EDUCARE</h4>
      </div>
      <div className="md:flex hidden items-center gap-[30px]">
        <ul className="flex gap-[30px] text-white">
          {links.map((menu) => (
            <li>
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            className="bg-white text-[#49088A] py-[10px] px-[30px] rounded-lg"
            to={"/"}
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
