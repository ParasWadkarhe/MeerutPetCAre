import React from "react";
import { useParams } from "react-router-dom";
import Dogs from "./Dogs"; // Import the Dogs array

const DogDetails = () => {
  const { id } = useParams();
  const dog = Dogs.find((dog) => dog.id === parseInt(id));

  if (!dog) {
    return <p>Dog not found</p>;
  }

  return (
    <div className="bg-[#f0efeb] min-h-screen p-8">
      <div className="bg-white p-6 border rounded shadow-md max-w-md mx-auto">
        <img
          src={dog.img}
          alt={dog.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-semibold text-center text-[#800000] mb-2">
          {dog.name}
        </h2>
        <p className="text-lg font-bold font-[Pacifico] italic text-gray-700 text-center mb-4">
          {dog.shortInfo}
        </p>
        <p className="text-center font-[Pacifico] italic font-bold text-2xl text-gray-700">
          {dog.longInfo}
        </p>
      </div>
    </div>
  );
};

export default DogDetails;
