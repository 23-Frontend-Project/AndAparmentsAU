import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Card() {
  return (
    <div className='w-[240px] h-[330px] bg-white'>
      <img src="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-160786-FgrOds-oBmQsYPUVbQGxgF2l0oq5tvNXZL6qECsNNX8-6445e3072e7e9-small" alt="" className='w-full h-6/10' />
      <div className='text-black w-full h-4/10 flex justify-center items-center flex-col'>
        <br />
        <h1 className='font-bold'>Luxe Modern Two Bedroom</h1>
        <h1 className='font-bold'>  Apartment - And Apartments</h1>
        <p className='text-gray-700'>Australia</p>
      </div>
    </div>
  );
}
