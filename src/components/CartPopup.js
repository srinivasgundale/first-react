import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../utils/cartSlice";

const CartPopup = ({ cart, onClose }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={item.thumbnail}
                        className="img-fluid cart-item-image"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <p>{item.title}</p>
                      <p>₹{item.price}</p>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            {cart.length > 0 && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            )}
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
