import Link from "next/link";
import React from "react";

function PathName() {
  return (
    <div className="bg-white flex flex-wrap gap-x-2 gap-y-1 px-4 py-4 my-4  text-sm md:text-base">
      <Link href="/home"> Home /</Link>
      <Link href="/store"> Shop /</Link>
      <Link href="/topshel" className="font-semibold">
        Top Cell Phones & Tablets
      </Link>
    </div>
  );
}

export default PathName;
