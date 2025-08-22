const categories = [
  "All",
  "Iphone",
  "Samsung",
  "Xiaomi",
  "Asus",
  "Oppo",
  "Gaming Smartphone",
  "Ipad",
  "Window Tablets",
  "eReader",
  "Smartphone Chargers",
  "5G Support Smartphone",
  "Smartphone Accessories",
  "Tablets Accessories",
  "Cell Phones  $200",
];
function Category() {
  return (
    <div className="flex flex-col gap-y-2 bg-[#EEEFF6] rounded-[10px] p-4 md:p-6 w-full md:w-auto">
      <h1 className="text-[16px] md:text-[18px] font-bold uppercase text-center md:text-left">
        categories
      </h1>

      <div className="flex justify-center md:justify-start">
        <button className="bg-white font-bold py-1 px-4 md:px-5 rounded-[8px] text-[13px] md:text-[14px]">
          All Categories
        </button>
      </div>

      <p className="font-semibold capitalize text-center md:text-left mt-2 md:mt-0">
        Cell Phones & Tablets
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-4 md:gap-x-0 text-center md:text-left">
        {categories.map((Category, index) => {
          return (
            <li key={index} className="text-[13px] md:text-[14px] my-1">
              {Category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
