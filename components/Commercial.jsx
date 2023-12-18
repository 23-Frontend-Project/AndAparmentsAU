import React from 'react';
import CommercialCard from './CommercialCard';
export default function Commercial() {
  return (
    <div className="w-screen h-[1200px] bg-black flex justify-center items-center flex-col gap-10">
      <div className="w-screen h-[300px] flex justify-center items-center flex-col">
        <h1 className="text-6xl text-[#CD997E] font-bold text-center">
          COMMERCIAL <br />
          TENANCIES
        </h1>
        <br />
        <p className="text-white text-lg text-center w-[50%] font-light ">
          Join Braddon’s best boutiques, cafes, bars and restaurants by claiming
          your spot in this thriving commercial precinct.
        </p>
      </div>
      <div className="w-[70%] h-full grid grid-cols-2 gap-2">
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
      </div>
    </div>
  );
}
