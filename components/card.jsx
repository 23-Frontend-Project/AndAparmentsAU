import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Card({Name,Location,ImageURL}) {
  return (
    <div className='w-full h-[330px] bg-white'>
      <div className={'h-3/5 w-full overflow-hidden cursor-pointer'}>
        <img className='hover:scale-110 h-full w-full object-cover transition' src={ImageURL} 
        alt="im" />
      </div>
      <div className='text-black w-full h-2/5 flex items-center pt-6 flex-col'>
        <h1 className='font-bold text-center text-sm'>{Name}</h1>
        <p className='text-gray-700 text-sm'>{Location}</p>
      </div>
    </div>
  );
}
