import React from 'react';
//import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4";
const OrderSuccessPage = () => {
  ReactGA.send({
    hitType: "pageview",
          page:"/",
          title:"Order Success"	
  });
  const cartItems = useSelector((state) => state.cart.items);
  // Assuming you use React Router to navigate and pass state
  //const location = useLocation();
  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = subtotal * 0.06;
  const delivery = 5;
  const total = subtotal + tax + delivery;
  const order = {
    items: cartItems,
    subtotal: subtotal,
    tax: tax,
    delivery: delivery,
    total: total,
    shipping: {
      name: 'Emily Johnson',
      address: '626 Main Street, Phoenix, MS 29112, United States',
      email: 'emily.johnson@x.dummyjson.com',
    },
  };
  //const { order } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-green-600">Order Successful!</h2>

        <p className="text-lg mb-4 text-gray-800">Thank you for your purchase. Your order has been placed successfully.</p>
        
        {order && (
          <>
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
                {order.items.map(item => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Subtotal</td>
                  <td className="border border-gray-300 px-4 py-2">${order.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Tax (6%)</td>
                  <td className="border border-gray-300 px-4 py-2">${order.tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Delivery</td>
                  <td className="border border-gray-300 px-4 py-2">${order.delivery.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold">Total</td>
                  <td className="border border-gray-300 px-4 py-2">${order.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Shipping Information</h4>
              <p><strong>Name:</strong> {order.shipping.name}</p>
              <p><strong>Address:</strong> {order.shipping.address}</p>
              <p><strong>Email:</strong> {order.shipping.email}</p>
            </div>

            <div className="mt-6 text-center">
              <Link to="/shop" className="btn btn-primary">Back to Home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSuccessPage;
