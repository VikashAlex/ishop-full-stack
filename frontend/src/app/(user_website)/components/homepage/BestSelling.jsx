import Image from "next/image";
import CardUi from "../store/CardUi";
const product = [
    {
        img: "/product/prod19.png",
        brands: "iPhone (ios)",
        items: 74,
    },
    {
        img: "/product/prod20.png",
        brands: "Android",
        items: 35,
    },
    {
        img: "/product/prod21.png",
        brands: "5G Support",
        items: 12,
    },
    {
        img: "/product/prod22.png",
        brands: "Apple Tablets",
        items: 22,
    },
    {
        img: "/product/prod23.png",
        brands: "Smartphone Chargers",
        items: 33,
    },
    {
        img: "/product/prod24.png",
        brands: "Gaming",
        items: 9,
    },
]



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

function BestSelling() {
    return (
        <main className="bg-white px-4 py-6 my-4 ">
            <div className="flex justify-between items-center px-6">
                <h3 className="text-[16px] md:text-[18px] font-bold uppercase mb-5 text-center md:text-left">
                    Best Laptops & Computers
                </h3>

                <div className="text-[13px] uppercase text-[#666666]">
                    view all
                </div>
            </div>



            {/* Banner Wrapper */}
            <div className="grid grid-cols-2 gap-x-3 px-6 border-b border-slate-200 pb-5 ">

                {/* Left Banner */}
                <div className=' h-[220px] md:h-[280px] lg:h-[200px] bg-[url("/slider/imagebest.png")] rounded-[10px] bg-cover bg-center text-white px-6 md:px-10 py-4 md:py-5'>
                    <h1 className="text-[22px] mb-2 md:text-[28px] uppercase lg:text-[30px] font-bold text-white max-w-[240px] leading-9">
                        Mobok 2
                        superchard
                        <p className="font-normal">by M2</p>

                    </h1>

                    <p className="text-[11px] md:text-[18px] text-[#666666] mb-2">Start from <span className="text-green-500">$1,199</span></p>

                    
                </div>

                {/* Right Banner */}
                <div className=' rounded-[10px]  grid grid-cols-3  '>
                    {product.map((pro, index) => {
                        return (
                            <div
                                className="flex gap-x-3 md:gap-x-6 items-center   justify-center"
                                key={index + 1}
                            >
                                <div>
                                    <Image
                                        src={pro.img}
                                        width={40}
                                        height={40}
                                        alt={pro.brands}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold capitalize text-[13px] md:text-[14px]">
                                        {pro.brands}
                                    </h3>
                                    <p className="text-[#666666] text-[11px] md:text-[12px]">
                                        {pro.items} items
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            <div className="grid grid-cols-5 gap-x-3 px-6">
                {products.map((item, index) => (
                    <CardUi item={item} key={index + 1} />
                ))}
            </div>

        </main>
    )
}

export default BestSelling