import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FcCancel } from "react-icons/fc";

function CardUi({ item }) {
  return (
    <div className="relative my-6 border-gray-200 border rounded-[7px]">
      <div className="absolute  px-3 top-3 left-0 w-full  flex items-center justify-between">
        {item.diccount ? (
          <div className="bg-[#1ABA1A] rounded-[7px] h-[41px] w-[73px] flex flex-col justify-center items-center text-white">
            <div>
              <p className="uppercase text-[10px]">save</p>
              <h3 className="font-semibold text-[14px]">{item?.diccount}</h3>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E2E4EB]">
          <FaHeart fill="#F1352B" />
        </div>
      </div>

      <div className="h-[195px] border-gray-200 border-b   flex items-center justify-center overflow-hidden">
        <Image
          src={item.img}
          width={130}
          height={100}
          alt={item.img}
          className=" object-cover object-center"
        />
      </div>

      <div className="  flex flex-col justify-between px-2 pb-4 ">
        <div className="min-h-[100px]">
          <p className="text-[#666666] text-center my-2 font-semibold">
            {item.count}
          </p>
          <h3 className="font-bold text-[12px] mb-2 line-clamp-2">
            {item.name}
          </h3>
        </div>
        <div className="flex items-center gap-x-2 mb-4">
          <h3 className="text-[#F1352B] font-bold">{item.price}</h3>
          <h5 className="line-through font-semibold text-[#666666]">
            {item.mrp}
          </h5>
        </div>

        <div className="flex gap-x-2 items-center mb-4">
          <h3
            className={`${
              item.shipping == "free shipping"
                ? "text-[#1ABA1A]"
                : "text-[#666666]"
            } uppercase px-3 py-1 rounded-[7px] bg-[#e4e4e4] text-[10px] font-semibold`}
          >
            {item.shipping}
          </h3>
          <p className="text-[#F1352B] uppercase px-3 py-1 rounded-[7px] bg-[#e4e4e4] text-[10px] font-semibold">
            {item?.gift}
          </p>
        </div>

        <div className="text-[12px] capitalize flex gap-x-1  items-center font-bold">
          {item.stock == "In stock" ? (
            <>
              <IoIosCheckmarkCircle fill="#1ABA1A" className="text-xl" /> In
              stock
            </>
          ) : (
            <>
              <FcCancel fill="#F1352B" className="text-xl" /> Out of stock
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardUi;
