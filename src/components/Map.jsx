import React from "react";

const Map = () => {
  return (
    <div className="map-container bg-[#f0efeb] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-[#800000] font-[Pacifico] text-4xl sm:text-5xl sm:mb-20 font-bold mb-10">
        Our Location
      </h1>
      <div className="w-72 h-96 sm:w-[550px] sm:h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.229425285455!2d77.7021166!3d28.980494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c656465c83183%3A0x28087830d0fb0524!2sMeerut%20Pets%20Care%20%7C%20Best%20Pets%20Care%20service%20in%20Meerut%20dogs%20hostel%20boarding%20saloon%20grooming%20training%20pets%20sale!5e0!3m2!1sen!2sin!4v1692199997423!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="rounded-xl border-[#800000] border-2"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
