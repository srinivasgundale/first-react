import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData, isSponsored }) => {
  const { category, description, id, image, price, rating, title, thumbnail } =
    resData || {};
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Ensure cart is an array
  const isAddedToCart = cartItems.some((cartItem) => cartItem?.id === id);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div>
        {Array.from({ length: fullStars }, (_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
        {halfStar && <i className="bi bi-star-half text-warning"></i>}
        {Array.from({ length: emptyStars }, (_, index) => (
          <i key={fullStars + index} className="bi bi-star text-warning"></i>
        ))}
      </div>
    );
  };

  return (
    
    <div className="mb-4 shadow-sm card">
      {isSponsored && <span className="sponsored-label">Sponsored</span>}
      <img className="card-img-top" src={thumbnail} alt={title} />
      <div className="card-body">
        <p className="card-title">{title?.substring(0, 20)}...</p>
        <p className="card-text">{description?.substring(0, 50)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <div className="d-flex align-items-center">
              {renderStars(rating)}
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary d-none"
            >
              {category}
            </button>
          </div>
          <small className="text-muted">₹{price}</small>
        </div>
        <button
          className={`mt-2 btn ${
            isAddedToCart ? "btn-success" : "btn-primary"
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (!isAddedToCart) {
              dispatch(addToCart(resData));
            } else {
              dispatch(removeFromCart({ id }));
            }
          }}
        >
          {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
    
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return <RestaurantCard {...props} isSponsored={true} />;
  };
};

export default RestaurantCard;
