import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [cardName, setCardName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment with:', {
      cardNumber,
      cardExpiry,
      cardCVC,
      cardName
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>

        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Card Number</span>
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              className="input input-bordered w-full"
              maxLength="19"
            />
          </div>

          {/* Card Expiry */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Expiry Date</span>
            </label>
            <input
              type="text"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)}
              placeholder="MM/YY"
              className="input input-bordered w-full"
              maxLength="5"
            />
          </div>

          {/* Card CVC */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">CVC</span>
            </label>
            <input
              type="text"
              value={cardCVC}
              onChange={(e) => setCardCVC(e.target.value)}
              placeholder="Enter your card CVC"
              className="input input-bordered w-full"
              maxLength="4"
            />
          </div>

          {/* Cardholder Name */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Cardholder Name</span>
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Confirm Payment Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">Confirm Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
