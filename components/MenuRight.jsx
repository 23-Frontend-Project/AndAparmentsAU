import React from 'react';
import { useRouter } from 'next/router';
export default function MenuRight() {
  const router = useRouter();
  return (
    <div className="w-[15.5%] h-[800px] bg-transparent text-white flex justify-center items-center  mr-0 fixed right-0 top-0 hidden xl:block">
      <div
        className="w-full h-1/2 flex justify-center items-center"
        onClick={() => router.push('/Listing')}
      >
        <span className="book-now__circle " aria-hidden="true"></span>
        {/* <span class="book-now__label ">Book now</span> */}
      </div>
    </div>
  );
}
