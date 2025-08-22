import React from "react";

function TopPart() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 md:gap-y-0 bg-white">
      {/* Left Side */}
      <div className="flex gap-x-3 items-center">
        <div className="bg-[#EBEEF6] rounded-[6px] py-[6px] px-[12px] text-[10px] md:text-[12px]">
          Hotline 24/7
        </div>
        <div className="font-bold text-[12px] md:text-[14px]">(025) 3886 25 16</div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-10 items-start md:items-center">
        <div className="flex gap-x-4">
          <div className="font-bold text-[12px]">Sell on Swoo</div>
          <div className="font-bold text-[12px]">Order Tracki</div>
        </div>

        <div className="flex gap-x-3 w-full md:w-fit">
          <select className="rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[12px] w-full md:w-auto">
            <option value="usdt">Usdt</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>

          <select className="rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[12px] w-full md:w-auto">
            <option value="eng">Eng</option>
            <option value="hin">Hindi</option>
            <option value="gra">Gujarati</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
