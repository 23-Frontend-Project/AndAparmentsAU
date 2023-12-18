import React from 'react';
import AndApartmentsLogo from './AndApartmentsLogo';

export default function Header() {
  return (
    <div className=" w-screen h-60 bg-transparent flex justify-around fixed left-0 top-0 xl:w-[75%] xl:left-[15.5%]">
      <AndApartmentsLogo />
    </div>
  );
}
