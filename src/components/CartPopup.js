// CartPopup.js
import React from "react";

const CartPopup = ({ cart, onClose }) => {
  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cart Items</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid cart-item-image"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
