import React from 'react';
import StudioCard from './StudioCard';
export default function Stay() {
  return (
    <div className="w-screen h-[2100px] bg-[#0d0d0d] flex justify-center items-center flex-col">
      <div className="w-full h-[300px] flex justify-center items-center flex-col">
        <h1 className="text-6xl text-[#CD997E] font-bold ">STAY</h1>
        <br />
        <p className="text-white text-xl text-center w-8/10">
          Stay for a week, weekend, or a year; the choice is all yours at And
          Apartments. Complete with eco-friendly extras and luxe <br />
          furniture, twenty superior apartments will cater to all your needs.
          Want the best rate? Save now by booking direct!
        </p>
        <br />
        <button className=" w-[127px] h-[44px] bg-white text-black flex justify-center items-center">
          <span className="text-lg"> BOOK NOW</span>
        </button>
      </div>
      <div className="w-4/5 h-full grid grid-cols-2 gap-4">
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <StudioCard />
        <div></div>
      </div>
    </div>
  );
}
