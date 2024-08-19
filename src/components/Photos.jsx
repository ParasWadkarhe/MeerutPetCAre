import React from "react";
import PhotoCard from "./PhotoCard"; // Import PhotoCard
import Dogs from "./Dogs"; // Import the Dogs array

const Photos = () => {
  return (
    <div className="bg-[#f0efeb] min-h-screen p-8">
      <p className="text-center sm:text-6xl sm:pb-5 font-[Pacifico] text-4xl font-bold text-[#800000] mb-6">
        Available Pets
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Dogs.map((dog) => (
          <PhotoCard
            key={dog.id}
            img={dog.img}
            name={dog.name}
            shortInfo={dog.shortInfo}
            id={dog.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
