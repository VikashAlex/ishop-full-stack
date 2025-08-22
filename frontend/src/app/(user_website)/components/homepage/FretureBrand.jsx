import Image from "next/image";
import React from "react";

function FretureBrand() {
  return (
    <div className="flex gap-x-5 my-3 px-4">
      <div className=" bg-white p-4 rounded-[10px] flex-1/2 ">
        <h1 className="text-[18px] font-bold flex uppercase justify-between mb-5">
          featured brands{" "}
          <span className="text-[13px] font-normal capitalize text-[#666666]">
            View All{" "}
          </span>
        </h1>
        <div className="grid grid-cols-5 items-center justify-center  gap-x-3 gap-y-4 px-3 mb-4  ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <Image
                key={item}
                src={`/homeimg/img${item}.png`}
                width={70}
                height={100}
                style={{ height: "auto" }}
                alt={`image${item}`}
              />
            );
          })}
        </div>
      </div>
      <div className=" bg-white p-4 rounded-[10px] flex-1/2 ">
        <h1 className="text-[18px] font-bold flex uppercase justify-between mb-5">
          top categories
          <span className="text-[13px] font-normal capitalize text-[#666666]">
            View All{" "}
          </span>
        </h1>
        <div className="flex justify-between items-center  gap-y-4 px-5 mb-4  ">
          {[
            { img: 11, name: "Laptops" },
            { img: 12, name: "PC Gaming" },
            { img: 13, name: "Headphones" },
            { img: 14, name: "Monitors" },
          ].map((item) => {
            return (
              <div key={item.img} >
                <div className="w-[70px] h-[100px] flex  justify-center items-center">
                  <Image
                    src={`/homeimg/img${item.img}.png`}
                    width={70}
                    height={100}
                    style={{ height: "auto" }}
                    alt={`${item.name}`}

                  />
                </div>
                <p className="mt-2">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FretureBrand;
