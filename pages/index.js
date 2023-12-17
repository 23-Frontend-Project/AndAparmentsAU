import React from 'react';
import Card from '@/components/card';
export default function Home() {
  return (
    <>
      <div className='bg-black full-screen'>
        <div>
          <div className='flex items-center justify-center mt-14 text-xl'>
            AND
          </div>
          <div className='flex items-center justify-center mt-2 text-xl'>
            APARTMENT
          </div>
        </div>
        <div>
          <h1 className='flex items-center justify-center large-heading mt-[85px] text-7xl text-brown-500'>
            BOOK NOW
          </h1>
        </div>
        <div className='ml-[23.2%] flex  items-center mt-[85px] gap-8'>
          <input type="text" placeholder='                     City' className='text-sm h-[35px] w-48 bg-white rounded-md border-slate-700/100 border-[1.5px] outline-0'>
          </input>
          <input type="text" placeholder='  Check-in - Check-out' className='h-[35px] w-48 border-b-2 bg-black outline-0 border-b-1'>
            </input>
          <input type='text' placeholder='  Guests' className='h-[35px] w-48 border-b-2 bg-black outline-0'>
          </input>
          <button type="button" className='h-[35px] w-36'>Search</button>
        </div>
        <br />
        <div className=' w-screen h-auto flex justify-center items-center'>
          <div className='w-8/10 h-auto grid grid-cols-3 gap-8 '>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </div></div>
      </div>
      <div className='flex justify-center items-center mt-72 '>
        FOLLOW US ON INSTAGRAM
      </div>
<br/>
      <div className='flex justify-center items-center gap-96'>
      <p>
      35 Lonsdale Street
Braddon ACT 2612
      </p>
      <p>
      02 6176 3494
andapartments@vervproperty.com
      </p>
      </div>
      <div className='flex justify-center items-center text-3xl mt-48 text-bold'>
        VERV
      </div>
      <div className='flex justify-center items-center gap-48 text-sm mt-12'>
        <p>
        ©2023 And Apartments
        </p>
        <p>
        And Apartments are managed by Verv Property
        </p>
        <a>
        Page by Sanchir
        </a>
      </div>
    </>
  );
}
