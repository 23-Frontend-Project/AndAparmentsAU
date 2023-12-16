import React from 'react';

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
        <h1 className='flex items-center justify-center large-heading mt-[85px] text-4xl text-yellow-600'>
          BOOK NOW
        </h1>
      </div>
    <div>
      <div className='flex justify-center items-center mt-[85px] '>
        <input type="text" placeholder='                 City' className='bg-white rounded-md border-slate-700/100 border-[1.5px] outline-0'>
        </input>
      </div>
      <div className='flex justify-center items-center mt-[85px]'>
        <input>
        </input>
      </div>
    </div>
    </div>  
    </>
  );
}
