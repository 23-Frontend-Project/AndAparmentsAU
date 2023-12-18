import React from 'react';
import Card from '@/components/card';
export default function Listing() {
  return (
    <div>
      <div className=" full-screen p-4 bg-black">
        <div className="w-screen flex justify-center items-center mt-16 fixed top-0">
          <br />
          <svg
            height="41.31"
            viewBox="0 0 166.714 41.31"
            width="166.714"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>And Apartments</title>
            <g fill="#fff">
              <path
                d="m-10.3 0-6.4 13.44v.27h3.049l1.244-2.815h6.728l1.245 2.815h3.049v-.27l-6.415-13.44zm1.263 3.248 2.273 5.195h-4.565z"
                transform="translate(74.807 0)"
              />
              <path
                d="m-16.777 0v9.507l-7.649-9.507h-2.774v13.71h2.777v-9.51l7.648 9.506h2.775v-13.706z"
                transform="translate(104.119 0)"
              />
              <path
                d="m-21.6-11c0 4.13-2.94 6.872-7.378 6.872h-6.042v-13.71h6.042c4.438 0 7.378 2.742 7.378 6.838m-2.958 0a4.226 4.226 0 0 0 -4.563-4.384h-3.049v8.8h3.049a4.244 4.244 0 0 0 4.566-4.416"
                transform="translate(130.212 17.841)"
              />
              <path
                d="m-10.3 0-6.4 13.439v.27h3.048l1.246-2.814h6.728l1.244 2.814h3.049v-.27l-6.415-13.439zm1.262 3.248 2.274 5.195h-4.564z"
                transform="translate(16.708 27.42)"
              />
              <path
                d="m-20.436-7.4c0 2.76-2.111 4.6-5.285 4.6h-4.563v4.507h-2.85v-13.707h7.414c3.175 0 5.285 1.84 5.285 4.6m-2.976 0a2.186 2.186 0 0 0 -2.453-2.147h-4.419v4.292h4.419a2.186 2.186 0 0 0 2.452-2.145"
                transform="translate(51.951 39.422)"
              />
              <path
                d="m-24.645-21.626v.27h-3.048l-1.245-2.814h-6.729l-1.244 2.814h-3.049v-.27l6.4-13.439h2.507zm-5.375-5-2.273-5.195-2.29 5.195z"
                transform="translate(72.665 62.485)"
              />
              <path
                d="m-20.757-21.626v.27h-3.086l-2.686-4.944h-4.271v4.942h-2.851v-13.707h7.468c2.994 0 4.979 1.75 4.979 4.384a4.077 4.077 0 0 1 -2.529 3.881zm-10.043-7.107h4.473a1.942 1.942 0 0 0 2.147-1.948 1.94 1.94 0 0 0 -2.147-1.932h-4.473z"
                transform="translate(85.176 62.485)"
              />
              <path
                d="m-20.929-3.948h-5.071v11.256h-2.85v-11.256h-5.086v-2.452h13.005z"
                transform="translate(101.179 33.821)"
              />
              <path
                d="m-25.052 0v13.709h-2.778v-9.56l-4.87 5.772h-.289l-4.852-5.736v9.524h-2.779v-13.709h2.779l5.014 5.99 5-5.99z"
                transform="translate(124.533 27.42)"
              />
              <path
                d="m-19.014-18.116v2.452h-11.816v-13.709h11.618v2.453h-8.767v3.012h8.225v2.454h-8.225v3.338z"
                transform="translate(135.387 56.793)"
              />
              <path
                d="m-21.249 0v13.709h-2.778l-7.649-9.509v9.506h-2.778v-13.706h2.778l7.648 9.506v-9.506z"
                transform="translate(155.247 27.42)"
              />
              <path
                d="m-20.929-3.948h-5.071v11.256h-2.85v-11.256h-5.086v-2.452h13.005z"
                transform="translate(171.597 33.821)"
              />
              <path
                d="m-.116-20.263v-2.742a13.394 13.394 0 0 0 6.206 1.659c2.147 0 3.572-.577 3.572-1.623 0-.939-.975-1.3-2.291-1.462l-2.724-.343c-2.417-.305-4.835-1.026-4.835-3.751 0-2.6 2.4-4.33 6.007-4.33a14.574 14.574 0 0 1 5.971 1.318v2.868a12.244 12.244 0 0 0 -5.809-1.624c-1.913 0-3.193.668-3.193 1.605 0 .956 1.1 1.228 2.543 1.426l2.814.359c2.309.29 4.492 1.12 4.492 3.753 0 2.616-2.562 4.366-6.4 4.366a12.786 12.786 0 0 1 -6.35-1.479"
                transform="translate(154.077 60.094)"
              />
            </g>
          </svg>
        </div>
        <div className="h-20"> </div>
        <div>
          <h1 className="flex items-center justify-center large-heading mt-[85px] text-5xl text-yellow-600">
            BOOK NOW
          </h1>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-4/5 flex  items-center mt-[85px] gap-8 flex-wrap">
            <input
              type="text"
              placeholder="                     City"
              className="text-sm h-[35px] w-48 bg-white rounded-md border-slate-700/100 border-[1.5px] outline-0"
            ></input>
            <input
              type="text"
              placeholder="  Check-in - Check-out"
              className="h-[35px] w-48 border-b-2 outline-0 border-b-1"
            ></input>
            <input
              type="text"
              placeholder="  Guests"
              className="h-[35px] w-48 border-b-2 outline-0"
            ></input>
            <button type="button" className="h-[35px] w-36">
              Search
            </button>
          </div>
        </div>
        <br />
        <div className=" w-full h-auto flex justify-center items-center">
          <div className="w-4/5 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            <Card
              Name="Luxe Modern Two Bedroom Apartment - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-160786-FgrOds-oBmQsYPUVbQGxgF2l0oq5tvNXZL6qECsNNX8-6445e3072e7e9-small"
            />
            <Card
              Name="Lonsdale Studio - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-98855-GFry957gd8MoSZSMVJ-auz--QgbJOz7XfXCZJShFBvOE-6205ec22e2a44-small"
            />
            <Card
              Name="Terrace Studio [Accessible] - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-117837-yTBRanhLFOcPn2fQX3crMxZa4Vwg7xuw5YWRdfdAuRU-62e21db282ae8-small"
            />
            <Card
              Name="Terrace Two-Bedroom - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-92069-awqUv5j4vG50nShaOYnojCZuFyRAFLGoLE-rj9eQxa4-617bb7277ee6b-small"
            />
            <Card
              Name="Spacious Urban One-Bedroom - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-98854-XW676paWqXYtGecPNYS68gUodRSxsMWOfe1WLDgZcfQ-642ccad5289d2-small"
            />
            <Card
              Name="Terrace Studio - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-96743-7--fFXGhFxmrV9ypuARKlsBCJNt5U2siQtQ1X9GsR6GY-61e4dab14ac65-small"
            />
            <Card
              Name="Park View Studio [Accessible] - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-92064-AJJmecBIfzUKmZ60xx6kRmlSwiii6Ek3XgzxVYv5NlE-617bd2c498150-small"
            />
            <Card
              Name="Park View Studio - And Apartments"
              Location="Australia, Braddon"
              ImageURL="https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/33029-92063-LGg5FUgcGzR07Hi9QRmollR02q1Sb467tjvIu4JvNUM-61c7bd21ac675-small"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-72 cursor-pointer hover:text-[#cd9a7e] transition">
        FOLLOW US ON INSTAGRAM
      </div>
      <div className="w-full flex justify-center mt-10 ">
        <div className="bg-[#cd9a7e] h-56 flex items-center mt-32">
          <svg
            className="w-64 h-64"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 274.03 250.04"
          >
            <path
              d="M184.36,189.63v250h274v-250ZM416,280.15c4.67,14,2.7,31.54-11.31,45.54l-1.79,1.8c.28-6.72-5.68-15-17.89-25.24l-25.61-22.1Zm-96.24-83.06c4.67,14,2.7,31.53-11.3,45.55l-1.8,1.8c.27-6.73-5.69-15-17.9-25.25h0l-25.6-22.1ZM302,415.26q-16.87,16.88-35.46,16.94-19.4,0-40.65-18.53l-8.55-6.44A86,86,0,0,1,199.41,387c-9.54-14.7-10.73-37.75,6.75-55.23l1.8-1.8c-.28,6.72,5.68,15,17.89,25.24l50.27,43.39c10.73,9.13,21.06,14.3,24.64,14.7h3.18Zm146.28,0q-16.87,16.88-35.46,16.94-19.39,0-40.65-18.53L238.22,298.44a86.2,86.2,0,0,1-17.88-20.26c-9.54-14.7-10.73-37.75,6.76-55.23l1.79-1.8c-.28,6.72,5.69,15,17.89,25.24L422.4,398.57c10.73,9.13,21.06,14.3,24.63,14.7h3.19Z"
              transform="translate(-184.36 -189.63)"
              fill="#000"
            ></path>
          </svg>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center gap-96 font-thin">
        <div className="flex flex-col">
          <p>35 Lonsdale Street</p>
          <p>Braddon ACT 2612</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="cursor-pointer hover:text-[#cd9a7e] transition">
            02 6176 3494
          </p>
          <p className="text-sm cursor-pointer hover:text-[#cd9a7e] transition">
            andapartments@vervproperty.com
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-3xl mt-48 text-bold">
        VERV
      </div>
      <div className="flex justify-center font-thin items-center gap-48 text-sm my-12 ">
        <p>©2023 And Apartments</p>
        <p>And Apartments are managed by Verv Property</p>
        <a>Page by Sanchir</a>
      </div>
    </div>
  );
}
