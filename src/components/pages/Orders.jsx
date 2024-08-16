import React, { useState } from 'react';

// Sample data
const sampleOrders = [
  { id: 1, customer: 'John Doe', status: 'Completed', total: 150.75, date: '2024-07-15' },
  { id: 2, customer: 'Jane Smith', status: 'Pending', total: 200.50, date: '2024-07-16' },
  { id: 3, customer: 'Alice Johnson', status: 'Shipped', total: 120.00, date: '2024-07-17' },
  { id: 4, customer: 'Bob Brown', status: 'Completed', total: 250.25, date: '2024-07-18' },
  // Add more sample orders here
];

const Orders = () => {
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = sampleOrders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>

        {/* Filters */}
        <div className="flex justify-between mb-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by customer name"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div className="w-full md:w-1/4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="table w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <tr key={order.id}>
                  <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.customer}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                  <td className="border border-gray-300 px-4 py-2">${order.total.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
