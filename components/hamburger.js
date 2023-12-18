import React from 'react';

export default function hamburgerIcon() {
  return (
    <div>
      <div className="p-1/2  w-10 h-10 bg-white flex justify-center items-center rounded-full fixed right-5 top-5 xl:hidden">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </div>
  );
}
