
"use client";
import StatsCard from "../components/StatsCard";
import OrdersTable from "../components/OrdersTable";


import { ShoppingCart, DollarSign, Users, Package } from "lucide-react";

export default function HomePage() {
  return (
        <main className="p-6 mt-16 flex-1">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              icon={ShoppingCart}
              title="Orders"
              value="1,245"
              color="text-blue-500"
            />
            <StatsCard
              icon={DollarSign}
              title="Revenue"
              value="$58,420"
              color="text-green-500"
            />
            <StatsCard
              icon={Users}
              title="Customers"
              value="3,580"
              color="text-purple-500"
            />
            <StatsCard
              icon={Package}
              title="Products"
              value="820"
              color="text-orange-500"
            />
          </div>

          {/* Orders Table */}
          <OrdersTable />
        </main>
  );
}
