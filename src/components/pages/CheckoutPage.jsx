import React, { useState } from 'react';

// Sample data for order summary
const sampleCartItems = [
  { id: 1, name: 'Product A', quantity: 2, price: 29.99 },
  { id: 2, name: 'Product B', quantity: 1, price: 49.99 },
  // Add more items here as needed
];

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  // Calculate totals
  const subtotal = sampleCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = subtotal * 0.06;
  const delivery = 50;
  const total = subtotal + tax + delivery;

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="table w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {sampleCartItems.map(item => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Subtotal</td>
                <td className="border border-gray-300 px-4 py-2">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Tax (6%)</td>
                <td className="border border-gray-300 px-4 py-2">${tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Delivery</td>
                <td className="border border-gray-300 px-4 py-2">${delivery.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Total</td>
                <td className="border border-gray-300 px-4 py-2">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Shipping Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Confirmation Button */}
        <div className="text-center">
          <button className="btn btn-primary w-full">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
