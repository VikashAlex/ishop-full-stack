import Image from "next/image";

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
  {
    img: "/product/prod25.png",
    brands: "Xiaomi",
    items: 52,
  },
  {
    img: "/product/prod26.png",
    brands: "Accessories",
    items: 18,
  },
  {
    img: "/product/prod27.png",
    brands: "Samsung Tablets",
    items: 16,
  },
  {
    img: "/product/prod28.png",
    brands: "eReader",
    items: 51,
  },
];
function PopularProduct() {
  return (
   <main className="bg-white px-4 py-6 my-4 ">
  <h3 className="font-bold text-[16px] md:text-[18px] uppercase mb-4 md:mb-6 text-center md:text-left">
    popular categories
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 px-2 md:px-5 py-4 md:py-6">
    {product.map((pro, index) => {
      return (
        <div
          className="flex gap-x-3 md:gap-x-6 items-center"
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
</main>
  );
}

export default PopularProduct;
