import React from 'react';
export default function MenuLeft() {
  return (
    <div className=" fixed left-0 top-0 hidden xl:block w-[15.5%] h-[800px] bg-transparent text-white flex justify-center items-center ">
      <div className="w-full h-1/2 flex justify-center items-center flex-col gap-4 font-medium mt-[200px]">
        <p>STAY HERE</p>
        <p>NEIGHBOURHOOD</p>
        <p>COMMERCIAL</p>
        <p>CONTACT</p>
        <p>REVIEWS</p>
      </div>
    </div>
  );
}
