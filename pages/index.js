import React from 'react';

export default function Home() {
  return (
    <>
    <div className='h-screen bg-black'>
      <div > 
      <h className='font-bold text-7xl text-bold text-orange-200 flex justify-center mt-[95px]  '> REVIEW US</h>
      <h className='font-bold text-7xl text-bold text-orange-200 flex justify-center mt-[5px] '> ON GOOGLE</h>
      </div>

      <div>
      <div className='flex justify-center'>
      <div className='w-[510px] h-[420px]  bg-zinc-900 mt-[25px] rounded-lg '></div>
      <div className='w-[501px] h-[410px] bg-black  mt-[30px] ml-0.5 rounded-lg absolute '>
        <h className='text-lg font-thin flex justify-center mt-8 mr-36'> Sarah York</h>
        <h className='text-sm font-thin flex justify-center mb-4 mr-36 text-zinc-500'> 6 months ago</h>
        </div> 

        <p className='absolute text-g mt-[190px] w-[450px]'> "Beautiful apartment in an ideal location. It’s on a street with so many awesome cafes, restaurants, a few homeware stores, Pilates studios and beauty spas all in walking distance. A bigger shopping centre is also an easy walk away ie. Canberra Centre, as is the City Bus Interchange. There is a lovely farmers market on Sunday’s in the park across the road. Also the staff are friendly and very helpful. We would definitely recommend."</p>

        <div className='absolute mt-[150px] h-24 w-24 mr-[305px]'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/star_imgfull.png'></img>
      </div>
      <div className='absolute mt-[150px] h-24 w-24 mr-[265px]'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/star_imgfull.png'></img>
      </div>
      <div className='absolute mt-[150px] h-24 w-24 mr-[225px]'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/star_imgfull.png'></img>
      </div>
      <div className='absolute mt-[150px] h-24 w-24 mr-[185px]'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/star_imgfull.png'></img>
      </div>
      <div className='absolute mt-[150px] h-24 w-24 mr-[145px]'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/star_imgfull.png'></img>
      </div>


      <div className=' mr-[320px] mt-[55px] absolute w-16 h-16'>
      <img src='https://andapartments.com.au/wp-content/uploads/2023/05/Group-5.png'></img>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
