import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo_transparent.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center bg-[#FBF8DD] items-center">
        <img src={logo} alt="logo" className="h-56 sm:h-54 w-auto" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:justify-center items-center bg-[#FBF8DD] border-b-8 border-[#800000] py-5 px-2 sm:px-8">
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-7 sm:gap-10 mt-5 sm:mt-0 text-3xl">
          <Link
            to="/"
            className="text-[#800000] sm:hover:text-4xl hover:duration-200 hover:ease-in-out font-[Pacifico] font-bold"
          >
            Home
          </Link>
          {/* <Link
            to="/services"
            className="text-[#800000] sm:hover:text-4xl hover:duration-200 hover:ease-in-out font-[Pacifico] font-bold"
          >
            Services
          </Link> */}
          {/* <Link
            to="/about"
            className="text-[#800000] sm:hover:text-4xl hover:duration-200 hover:ease-in-out font-[Pacifico] font-bold"
          >
            About Us
          </Link> */}
          <Link
            to="/contact"
            className="text-[#800000] sm:hover:text-4xl hover:duration-200 hover:ease-in-out font-[Pacifico] font-bold"
          >
            Contact Us
          </Link>
          {/* <Link
            to="/bookaservice"
            className="text-[#800000] sm:hover:text-4xl hover:duration-200 hover:ease-in-out font-[Pacifico] font-bold"
          >
            Book a Service
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Header;
