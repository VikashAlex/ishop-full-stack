// components/Sidebar.jsx
import Link from "next/link";
import { MdCategory } from "react-icons/md";
import { LayoutDashboard,  ShoppingCart, Users, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <section className="w-64 bg-white">
      <div className="p-4 text-2xl font-bold border-b">Admin</div>
      <nav className="p-4 space-y-2">
        <Link href="/admin" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200">
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </Link>
        <Link href="/admin/category" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200">
          <MdCategory className="w-5 h-5" /> Category
        </Link>
        <Link href="/admin/orders" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200">
          <ShoppingCart className="w-5 h-5" /> Orders
        </Link>
        <Link href="/admin/customers" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200">
          <Users className="w-5 h-5" /> Customers
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200">
          <Settings className="w-5 h-5" /> Settings
        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
