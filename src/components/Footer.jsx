import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="bg-[#800000] pb-8">
        <div className=" sm:justify-center justify-center flex sm:flex sm:pt-10 sm:pb-10 pt-6 pb-6">
          <p className="text-white font-bold sm:text-2xl text-xl ">
            Contact Us:
          </p>
        </div>
        <div className="flex text-2xl sm:text-3xl pb-7 sm:gap-6 text-white gap-3 justify-center text-center">
          <a
            href="https://youtube.com/@meerutpetsallfacilitys8726?si=TE3PWBMXrWOPc6qw"
            target="_blank"
          >
            <FaYoutube className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
          <a
            href="https://www.facebook.com/abhi.aggarwal.568?mibextid=JRoKGi"
            target="_blank"
          >
            <FaFacebookSquare className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
          <a href="https://wa.me/message/MIEIRNTBWF2DD1" target="_blank">
            <FaWhatsapp className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
          <a
            href="https://www.instagram.com/meerut_petcare_hub?utm_source=qr&igsh=YXE1N2dzMWs2dm9p"
            target="_blank"
          >
            <FaInstagram className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
          <a href="tel:+919634737080" target="_blank">
            <FaPhoneAlt className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
          <a href="mailto:khushiagarwal3757@gmail.com" target="_blank">
            <CiMail className=" sm:hover:text-4xl ease-in-out duration-100" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaRegCopyright className="text-xl text-white" />
          <p className="text-xl text-white font-bold">2024 MEERUT PETS CARE</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
