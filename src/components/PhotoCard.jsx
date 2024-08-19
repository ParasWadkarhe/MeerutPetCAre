import React from "react";
import { Link } from "react-router-dom";

const PhotoCard = ({ img, name, shortInfo, id }) => {
  return (
    <div className="bg-white p-4 border rounded shadow-md">
      <img
        src={img}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded"
      />
      <p className="mt-4 text-2xl font-semibold text-center text-[#800000]">
        {name}
      </p>
      <p className="mt-2 text-center text-lg font-bold font-[Pacifico] italic text-gray-700">
        {shortInfo}
      </p>
      <Link to={`/dog/${id}`}>
        <button className="mt-4 w-full bg-[#800000] text-lg hover:text-xl ease-in-out duration-100 font-bold text-white py-2 rounded hover:bg-[#640000]">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default PhotoCard;
