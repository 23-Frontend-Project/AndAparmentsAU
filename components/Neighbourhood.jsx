import React from 'react';
export default function Neighbourhood() {
  return (
    <div className="w-screen h-[1000px] bg-[#0d0d0d] flex justify-center items-center flex-col gap-10">
      <div className="w-full h-[300px] flex justify-center items-center flex-col">
        <h1 className="text-6xl text-[#CD997E] font-bold ">NEIGHBOURHOOD</h1>
        <br />
        <p className="text-white text-lg text-center w-[50%] font-light ">
          Perfectly placed in the heart of Braddon, And Apartments is nestled
          alongside Canberra’s best boutiques, cafes, bars and restaurants.
          Indulge in a meal of modern Australian cuisine at Corella Bar and
          Eighty-Six, something Asian inspired at Lazy Su or try the
          ever-popular Italian and Sons; you can always finish the meal with a
          treat from Gelato Messina, with 40 flavours to select from. On
          Sundays, grab your fresh produce from the village markets at Haig Park
          plus benefit from being within walking distance to the Canberra Centre
          - the ultimate destination for fashion and lifestyle shopping.
        </p>
        <br />

        <br />
        <br />
      </div>
      <div className="w-3/4 h-[600px] flex justify-center items-center flex-col overflow-x-scroll overflow-y-scroll">
        <img
          src="https://i.ibb.co/SK6RKyq/Screenshot-2023-12-18-at-5-50-51-AM.png"
          alt=""
          className="w-[150%] h-[150%]"
        />
      </div>
    </div>
  );
}
