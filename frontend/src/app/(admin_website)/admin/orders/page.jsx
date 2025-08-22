// app/dashboard/orders/page.jsx
export default function OrdersPage() {
  const orders = [
    { id: "#1001", customer: "John Doe", status: "Completed", total: "$250" },
    { id: "#1002", customer: "Jane Smith", status: "Pending", total: "$120" },
    { id: "#1003", customer: "Michael Lee", status: "Cancelled", total: "$80" },
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{o.id}</td>
              <td className="p-3">{o.customer}</td>
              <td className={`p-3 font-semibold ${o.status === "Completed" ? "text-green-600" : o.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                {o.status}
              </td>
              <td className="p-3">{o.total}</td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
