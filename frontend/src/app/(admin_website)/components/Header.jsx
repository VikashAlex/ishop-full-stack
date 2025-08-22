// components/Header.jsx
import { Bell } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white top-0 left-0 shadow fixed w-full z-10 ">
     <Link href='/admin'> <h1 className="text-xl font-semibold">Dashboard</h1></Link> 
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;
