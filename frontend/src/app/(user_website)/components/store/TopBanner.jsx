import React from "react";

function TopBanner() {
  return (
    <main className="bg-white px-4 py-6 my-4 ">
      <h3 className="text-[16px] md:text-[18px] font-bold uppercase mb-5 text-center md:text-left">
        top cell phones & tablets
      </h3>

      {/* Banner Wrapper */}
      <div className="flex flex-col lg:flex-row gap-3">
        
        {/* Left Banner */}
        <div className='w-full lg:w-[800px] h-[220px] md:h-[280px] lg:h-[310px] bg-[url("/slider/slider3.png")] rounded-[10px] bg-cover bg-center text-white px-6 md:px-10 py-4 md:py-5'>
          <h1 className="text-[22px] md:text-[28px] lg:text-[36px] font-bold">
            Noise Cancelling 
            <p className="font-normal">Headphone</p>
          </h1>

          <div className="my-3 md:my-5 md:mx-5 text-sm md:text-base">
            <p>Boso Over-Ear Headphone</p>
            <p>Wifi, Voice Assistant,</p>
            <p>Low latency game mode</p>
          </div>

          <button className="bg-white text-black py-2 px-4 rounded-[10px] cursor-pointer font-semibold text-sm md:text-base">
            BUY NOW
          </button>
        </div>

        {/* Right Banner */}
        <div className='w-full flex-1 rounded-[10px] bg-[url("/slider/div.png")] bg-cover bg-center flex flex-col md:flex-row justify-between py-4 md:py-5 px-6 md:px-10 gap-y-3 md:gap-y-0'>
          <div>
            <h1 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] leading-snug">
              redmi note 12 <br /> Pro+ 5g
            </h1>
            <p className="text-[11px] md:text-[12px]">Rise to the challenge</p>
          </div>
          <div className="flex md:items-center">
            <button className="bg-black text-white py-2 px-4 rounded-[10px] cursor-pointer font-semibold text-sm md:text-base">
              SHOP NOW
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

export default TopBanner;
