import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { category, description, id, image, price, rating, title } =
    resData || {};
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isAddedToCart = cart.some((cartItem) => cartItem?.id === id);

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
      <img className="card-img-top " src={image} alt={title} />
      <div className="card-body">
        <p className="card-title">{title?.substring(0, 20)}...</p>
        <p className="card-text">{description?.substring(0, 50)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <div className="d-flex align-items-center">
              {renderStars(rating?.rate)}
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
              dispatch(removeFromCart(resData));
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
    return (
      <>
        <span className="btn btn-info sponsored-label">Sponsored</span>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
