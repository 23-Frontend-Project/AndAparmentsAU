import React from 'react';

export default function CommercialCard() {
  return (
    <div className="w- h-1/2 border border-t-1 border-b-1 border-l-0 border-r-0 flex justify-around items-center flex-col">
      <p className="text-white text-xs font-semibold">UNIT 01</p>
      <h1 className="text-white text-5xl font-bold"> INTRA LNSD </h1>
      <button className=" w-auto p-4 h-[44px] gap-4 bg-black text-white flex justify-center items-center rounded-3xl border border-2 border-white hover:border-4">
        <span className="text-sm font-semibold">LEARN MORE</span>
      </button>{' '}
    </div>
  );
}
