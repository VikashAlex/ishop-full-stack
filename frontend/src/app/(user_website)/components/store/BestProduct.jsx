import React from 'react'
import CardUi from './CardUi'

const products = [
    { 
        name:"uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
        img:"/bestProduct/prod1.png",
        alt:"prod1",
        price:"$1,729.00",
        mrp:"$2,119.00",
        shipping:"free shipping",
        stock:"Out of stock",
        diccount:"$59.00",
        count:"(8)"
    },

     { 
        name:"Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
        img:"/bestProduct/prod2.png",
        alt:"prod2",
        price:"$979.00",
        mrp:"$1,259.00",
        shipping:"$2.98 Shipping",
        stock:"  In stock",
        diccount:"$49.00",
        count:"(11)",
        gift:"FREE GIFT"
    },
     { 
        name:"iSmart 24V Charger",
        img:"/bestProduct/prod3.png",
        alt:"prod3",
        price:"$879.00",
        mrp:"$959.00",
        shipping:"free shipping",
        stock:"In stock",
        diccount:"$56.00",
        count:"(9)"
    },

      { 
        name:"OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
        img:"/bestProduct/prod4.png",
        alt:"prod4",
        price:"$569.00",
        mrp:"$759.00",
        shipping:"free shipping",
        stock:"In stock",
        diccount:"$56.00",
        count:"(152)",
        gift:"FREE GIFT"
    },
    
]
function BestProduct() {
  return (
   <div className="pb-6 border-gray-300 border-b-[1px] mb-6">
  <h3 className="font-bold uppercase text-[18px] mb-4 sm:mb-6 text-center sm:text-left">
    Best seller in this category
  </h3>

  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-3 gap-y-4">
    {/* Prev Button */}
    <div className="hidden sm:flex w-[18px] p-3 items-center justify-center text-[6px] bg-[#EDEFF6] rounded-[10px] break-words">
      Prev
    </div>

    {/* Cards Grid */}
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((item, index) => (
        <CardUi item={item} key={index + 1} />
      ))}
    </div>

    {/* Next Button */}
    <div className="hidden sm:flex w-[17px] p-3 items-center justify-center text-[6px] bg-[#EDEFF6] rounded-[10px] break-words">
      Next
    </div>
  </div>
</div>

  )
}

export default BestProduct