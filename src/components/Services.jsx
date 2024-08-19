import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiJumpingDog } from "react-icons/gi";
import { PiDogBold } from "react-icons/pi";

const Services = () => {
  return (
    <>
      <div className="bg-[#f0efeb]">
        <div className=" sm:pt-5 pt-5 text-center text-5xl text-[#800000] font-bold font-[Pacifico]">
          <p>Our Services</p>
        </div>
        <div className="flex flex-wrap pt-7 pb-7 justify-evenly sm:pt-10">
          {/* First Icon and Text */}
          <div className="flex flex-col sm:max-w-[25%] items-center text-center">
            <GiDogHouse className="sm:text-5xl sm:mt-7 text-4xl text-zinc-950" />
            <p className="text-2xl sm:text-4xl sm:mt-5 sm:mb-3 font-[Pacifico] mt-2">
              Dogs Hostel Boarding
            </p>
            <p className="mt-3 text-xl pl-3 pr-3 italic sm:text-2xl font-[Pacifico]">
              Leave your furry companion in safe hands when you go on a trip
              with the assurance that our rated dog hostel boarding services
              will treat him like family. We have spacious play areas and an
              attention team that will make your pet feel homely and
              comfortable. We treat every dog as our own, making sure their stay
              is fun and not stressful.
            </p>
          </div>

          {/* Second Icon and Text */}
          <div className="flex flex-col sm:max-w-[25%] items-center text-center">
            <GiSittingDog className="sm:text-5xl mt-7 text-4xl text-zinc-950" />
            <p className="text-2xl sm:text-4xl sm:mt-5 sm:mb-3 font-[Pacifico] mt-2">
              Dogs Grooming
            </p>
            <p className="mt-3 text-xl pl-3 pr-3 italic sm:text-2xl font-[Pacifico]">
              Our professional grooming will leave your pets looking and feeling
              great. Be it a simple bath, stylish haircuts, or specialized
              grooming needs, our skilled groomers treat every pet with care and
              precision for a nice experience for your furry friend.
            </p>
          </div>

          {/* Third Icon and Text */}
          <div className="flex flex-col sm:max-w-[25%] items-center text-center">
            <GiJumpingDog className="sm:text-5xl mt-7 text-4xl text-zinc-950" />
            <p className="text-2xl sm:text-4xl sm:mt-5 sm:mb-3 font-[Pacifico] mt-2">
              Dogs Training
            </p>
            <p className="mt-3 text-xl pl-3 italic pr-3 sm:text-2xl font-[Pacifico]">
              Good behavior is the essence of a beautiful relationship between a
              pet and its owner. Our expert trainers at Meerut Pets Care offer
              various, tailored training programs according to your needs. Be it
              a pup looking to learn basic things or an adult who requires some
              advanced behavioral modification course, our trainers use tools
              and techniques to enable them to grow into well-mannered
              companions.
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:pt-10 sm:pb-10">
          <div className="flex flex-col sm:max-w-[25%] items-center text-center">
            <PiDogBold className="sm:text-5xl mt-7 text-4xl text-zinc-950" />
            <p className="text-2xl sm:text-4xl sm:mt-5 sm:mb-3 font-[Pacifico] mt-2">
              Dog Mating
            </p>
            <p className="mt-3 text-xl pl-3 pr-3 italic sm:text-2xl font-[Pacifico]">
              we understand that finding the right mate for your dog is
              essential. Our dog mating service connects responsible pet owners
              with healthy, well-bred companions, ensuring the best possible
              match. We prioritize safety, compatibility, and the well-being of
              all dogs in our care. With a focus on breed, temperament, and
              health, we help create the next generation of happy, healthy
              puppies. Let us help you find the perfect match for your furry
              friend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
