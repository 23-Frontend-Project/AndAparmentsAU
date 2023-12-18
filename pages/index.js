import Header from '@/components/Header';
import SLogoUHeader from '@/components/SLogoUHeader';
import WelcomeImage from '@/components/WelcomeImage';
import MenuLeft from '@/components/MenuLeft';
import MenuRight from '@/components/MenuRight';
import FrontPageCompOne from '@/components/FrontPageCompOne';
import Stay from '@/components/Stay';
import RelaxAndStay from '@/components/RelaxAndStay';
import Neighbourhood from '@/components/Neighbourhood';
import Commercial from '@/components/Commercial';
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('https://andapartments.com.au/wp-content/themes/and-apartments/images/background-texture.jpg')]  bg-no-repeat bg-fixed bg-center bg-cover">
        <Header />
        <MenuLeft />
        <MenuRight />
        <div className="h-60 bg-black "></div>
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
        <div>
          {' '}
          <SLogoUHeader />
          <WelcomeImage />
        </div>
        <FrontPageCompOne />
        <Stay />
        <RelaxAndStay />
        <Neighbourhood />
        <Commercial />
        <div className=" h-auto bg-black text-white">
          {' '}
          <div className="flex justify-center items-center mt-72 cursor-pointer hover:text-[#cd9a7e] transition bg-black">
            FOLLOW US ON INSTAGRAM
          </div>
          <div className="w-full flex justify-center mt-10 bg-black ">
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
            <a>Page by Professional Gays</a>
          </div>
        </div>
      </div>
    </>
  );
}
