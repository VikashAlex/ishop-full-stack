import { LiaLaptopSolid } from "react-icons/lia";
import { MdInstallMobile } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LuTabletSmartphone } from "react-icons/lu";
import { TbCameraSpark } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
const lists = [
  {
    img: <LiaLaptopSolid fill="#01A49E" />,
    name: "Laptops",
    item: "1",
  },
  {
    img: <FaComputer fill="#01A49E" />,
    name: "PC & Computers",
    item: "2",
  },
  {
    img: <MdInstallMobile fill="#01A49E" />,
    name: "Cell Phones",
    item: "3",
  },
  {
    img: <LuTabletSmartphone fill="#01A49E" />,
    name: "Tablets",
    item: "4",
  },
  {
    img: <TbCameraSpark fill="#01A49E" />,
    name: "Cameras",
    item: "5",
  },
];
function TopMain() {
  return (
      <div className="flex gap-x-5 my-2">
        <div className="p-4 w-[298px] bg-white rounded-[15px]">
          <h1 className="border-b border-[#ECECEC] py-2 mb-4 font-bold text-[24px]">
            Category
          </h1>
          <ul className="flex flex-col gap-y-3 px-2 ">
            {lists.map((list, index) => {
              return (
                <li
                  key={index + 1}
                  className="flex items-center justify-between p-3 border border-[#F2F3F4] rounded-[7px]"
                >
                  <div className="flex items-center  gap-x-2 text-sm font-bold">
                    {list.img} {list.name}
                  </div>
                  <span className="w-[20px] h-[20px] flex justify-center items-center bg-[#01A49E] rounded-full text-white">
                    {" "}
                    {list.item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-[30px]  bg-[url('/homeimg/banner.png')] bg-cover bg-center flex-1 py-3">
          <div className="px-16 py-10 text-white">
            <h1 className="mb-6  text-[72px] font-bold leading-[1.1]">Don’t miss amazing grocery deals</h1>
            <p className="mb-4 text-[30px] font-semibold">Sign up for the daily newsletter</p>
            <div className="border-[#9A9A9A] border inline-flex pl-5  gap-x-4 text-[16px] rounded-[50px] mt-4 overflow-hidden text-white">
              <div className="flex items-center gap-x-4  ">
                <FaTelegram fill="#fff"  />
                Your emaill address
              </div>
              <button className="bg-[#01A49E] px-6 py-3 rounded-[50px]">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default TopMain;
