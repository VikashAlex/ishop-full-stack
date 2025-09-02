import Image from "next/image";
import React from "react";
import CardUi from "../store/CardUi";

const products = [
  {
    name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
    img: "/bestProduct/prod1.png",
    alt: "prod1",
    price: "$1,729.00",
    mrp: "$2,119.00",
    shipping: "free shipping",
    stock: "Out of stock",
    diccount: "$59.00",
    count: "(8)"
  },

  {
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    img: "/bestProduct/prod2.png",
    alt: "prod2",
    price: "$979.00",
    mrp: "$1,259.00",
    shipping: "$2.98 Shipping",
    stock: "  In stock",
    diccount: "$49.00",
    count: "(11)",
    gift: "FREE GIFT"
  },
  {
    name: "iSmart 24V Charger",
    img: "/bestProduct/prod3.png",
    alt: "prod3",
    price: "$879.00",
    mrp: "$959.00",
    shipping: "free shipping",
    stock: "In stock",
    diccount: "$56.00",
    count: "(9)"
  },

  {
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    img: "/bestProduct/prod4.png",
    alt: "prod4",
    price: "$569.00",
    mrp: "$759.00",
    shipping: "free shipping",
    stock: "In stock",
    diccount: "$56.00",
    count: "(152)",
    gift: "FREE GIFT"
  },
  {
    name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
    img: "/product/prod21.png",
    alt: "prod5",
    price: "$1,729.00",
    mrp: "$2,119.00",
    shipping: "free shipping",
    stock: "Out of stock",
    diccount: "$59.00",
    count: "(8)"
  },


]

function DealsSec() {
  return (
    <div className="px-4">
      <div className="flex gap-x-5">
        <div className="w-[971px]">
          <div className="bg-[#01A49E] uppercase text-white rounded-[10px] text-[18px] font-bold py-3 pl-6 ">
            Deals of the day
          </div>
          <div className=" bg-white rounded-[10px] flex px-6 py-5">
            <div className="flex-1/2 flex p-5">
              <div className="w-[30px] flex flex-col justify-items-start gap-y-5">
                <Image
                  src="/product/prod46.png"
                  width={50}
                  height={50}
                  alt="prod46"
                />
                <Image
                  src="/product/prod47.png"
                  width={50}
                  height={50}
                  alt="prod47"
                />
                <Image
                  src="/product/prod48.png"
                  width={50}
                  height={50}
                  alt="prod48"
                />
                <Image
                  src="/product/prod49.png"
                  width={7}
                  height={50}
                  alt="prod49"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center ">
                <div className="flex justify-end  w-full">
                  <div className="bg-[#EBEDF3] w-[30px] h-[30px] rounded-full"></div>
                </div>
                <div>
                  <Image
                    src="/product/prod50.png"
                    width={200}
                    height={50}
                    alt="prod50"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1/2 px-5">
              <p className="text-[#666] text-center mb-1">(12)</p>
              <h1 className="font-bold text-[16px] mb-2">
                Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
              </h1>
              <div className="flex items-center gap-x-3 mb-2">
                <h1 className="font-bold text-[#01A49E]">$569.00 </h1>
                <p className="line-through text-[#666666]">$759.00</p>
              </div>
              <ul className="list-inside list-disc text-[12px] mb-4">
                <li>
                  {" "}
                  Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                </li>
                <li> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                <li> Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
              </ul>

              <div className="flex gap-x-3 items-center mb-5">
                <div className="text-[#01A49E] rounded-[6px] bg-gray-200 text-[12px] py-1 px-3 uppercase font-bold ">
                  free shipping
                </div>
                <div className="text-[#01A49E] rounded-[6px] bg-gray-200 text-[12px] py-1 px-3 uppercase font-bold ">
                  free gift
                </div>
              </div>
              <div className="flex gap-x-3  items-center py-3 border-b border-[#EBEDF3]">
                <div className="w-[100px] text-sm font-bold">hurry up! Promotion will expires in</div>
                <div className=" px-6 flex-1 flex justify-between ">
                  <div className="w-[55px] h-[74px] rounded-[6px] bg-[#EBEDF3] flex justify-center items-center font-bold">-162</div>
                  <div className="w-[55px] h-[74px] rounded-[6px] bg-[#EBEDF3] flex justify-center items-center font-bold">-32</div>
                  <div className="w-[55px] h-[74px] rounded-[6px] bg-[#EBEDF3] flex justify-center items-center font-bold">-34</div>
                  <div className="w-[55px] h-[74px] rounded-[6px] bg-[#EBEDF3] flex justify-center items-center font-bold">-162</div>
                </div>
              </div>
              <div className="my-5">
                <div className="h-[10px] bg-[#E2E4EB] rounded-[10px] mb-2">
                  <div className="w-52 bg-[#01A49E] h-full rounded-[10px]"></div>
                </div>
                <p>Sold:<span className="font-bold">26/75</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 flex-1">
          <div className='rounded-[10px] bg-[url("/homeimg/img15.png")] bg-cover bg-center h-[160px] '></div>
          <div className='rounded-[10px] bg-[url("/homeimg/img16.png")] bg-cover bg-center h-[160px] '></div>
          <div className='rounded-[10px] bg-[url("/homeimg/img17.png")] bg-cover bg-center h-[160px] '></div>
        </div>

      </div>

      <div>
        <div className="bg-[#01A49E] rounded-[20px] h-[140px] relative overflow-hidden text-white flex justify-around items-center">
          <div className="absolute h-[400px] w-[400px] -z-0 rounded-full bg-[#5F81A2] left-75 top-20 -translate-y-1/2"></div>
          <div>
            <h1 className="uppercase font-bold text-[24px]">Pre Order</h1>
            <p className="text-[14px]">From $399</p>
          </div>

          <div className="h-[125px] w-[386px] mt-[15px] z-1 bg-[url('/homeimg/banner2.png')] bg-cover">

          </div>

          <div>
            <p className="text-[12px]">Opplo Watch Sport Series 8</p>
            <h1 className="text-[30px]">A healthy leap ahead</h1>
          </div>

          <div className='flex justify-items-end'>
            <button className="bg-[#fff] text-black py-2 px-4 rounded-full font-bold">Discover Now</button>
          </div>


        </div>
      </div>
      <div className="rounded-[10px] px-6 bg-white py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-6">
            <h2 className="font-bold uppercase text-[18px]">Best Seller</h2>
            <h2 className="text-[#666666] uppercase text-[18px]">New in</h2>
            <h2 className="text-[#666666] uppercase text-[18px]">popular</h2>
          </div>

          <div className="text-[13px] uppercase text-[#666666]">
            view all
          </div>
        </div>

        <div className="grid grid-cols-5 gap-x-3 px-6">
          {products.map((item, index) => (
            <CardUi item={item} key={index + 1} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default DealsSec;
