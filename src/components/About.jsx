import React from "react";
import about from "../Images/about_img.jpeg";
import owner from "../Images/owner.jpeg";

const About = () => {
  return (
    <>
      <div>
        <p className="bg-[#f0efeb] text-4xl sm:text-5xl font-[Pacifico] pb-5 sm:pt-7 text-[#800000] text-center font-bold">
          About Us
        </p>
        <div className="flex bg-[#f0efeb] pb-7 pr-3 pl-3 pt-5 justify-center">
          <img
            src={owner}
            alt="Owner Image"
            className="w-72 h-80 sm:w-88  sm:h-96  rounded-lg object-cover"
          />
        </div>
        <div className="bg-[#f0efeb] sm:pt-10 pb-5 sm:pb-10 flex flex-col sm:flex-row items-center sm:justify-center">
          <div className="pl-3 pr-3 sm:pl-24 text-xl sm:text-2xl font-[Pacifico] italic font-bold sm:w-2/3">
            <p className="pb-5 text-center sm:text-left">
              Welcome to{" "}
              <strong className="text-[#800000]">Meerut Pets Care</strong>, your
              trusted associate for outstanding pet care and pet sales. Our love
              and passion for animals shape everything here at Meerut Pets Care
              and ensure premium services and pets for our esteemed customers.
              From providing professional care for your dog in your absence to
              pampering services that keep them looking fabulous, to training
              them to be the best-behaved version of themselves—no matter what,
              we've got your back.
            </p>
          </div>
          <div className="sm:w-1/3 flex justify-center sm:justify-end">
            <img
              src={about}
              className="h-60 sm:h-auto sm:rounded-none rounded-lg sm:pr-20 sm:w-[300px] object-cover"
              alt="about_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
