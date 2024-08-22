import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../store/favouriteSlice";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  XCircleIcon,
  HeartIcon as HeartIconOutline,
  HeartIcon as HeartIconSolid,
  StarIcon as StarOutlineIcon,
} from "@heroicons/react/24/solid";

const RestaurantCard = ({ resData, isSponsored }) => {
  const { category, description, id, image, price, rating, title, thumbnail } =
    resData || {};
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Ensure cart is an array
  const isAddedToCart = cartItems.some((cartItem) => cartItem?.id === id);
  const favourites = useSelector((state) => state.favourites.items);
  //console.log("🚀 ~ RestaurantCard ~ favourites:", favourites)

  const isFavourite = favourites.some((item) => item.id === id);

  // const renderStars = (rating) => {
  //   const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  //   return (
  //     <div>
  //       {Array.from({ length: fullStars }, (_, index) => (
  //         <i key={index} className="bi bi-star-fill text-warning"></i>
  //       ))}
  //       {halfStar && <i className="bi bi-star-half text-warning"></i>}
  //       {Array.from({ length: emptyStars }, (_, index) => (
  //         <i key={fullStars + index} className="bi bi-star text-warning"></i>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    // <div className="mb-4 shadow-sm card">
    //   {isSponsored && <span className="sponsored-label">Sponsored</span>}
    //   <img className="card-img-top" src={thumbnail} alt={title} />
    //   <div className="card-body">
    //     <p className="card-title">{title?.substring(0, 20)}...</p>
    //     <p className="card-text">{description?.substring(0, 50)}</p>
    //     <div className="d-flex justify-content-between align-items-center">
    //       <div className="btn-group">
    //         <div className="d-flex align-items-center">
    //           {renderStars(rating)}
    //         </div>
    //         <button
    //           type="button"
    //           className="btn btn-sm btn-outline-secondary d-none"
    //         >
    //           {category}
    //         </button>
    //       </div>
    //       <small className="text-muted">₹{price}</small>
    //     </div>
    //     <button
    //       className={`mt-2 btn ${
    //         isAddedToCart ? "btn-success" : "btn-primary"
    //       }`}
    //       onClick={(e) => {
    //         e.preventDefault();
    //         if (!isAddedToCart) {
    //           dispatch(addToCart(resData));
    //         } else {
    //           dispatch(removeFromCart({ id }));
    //         }
    //       }}
    //     >
    //       {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
    //     </button>
    //   </div>
    // </div>
    // <>
    //   <Link to={"/product/" + id}>
    //     <figure>
    //       <img src={thumbnail} alt={title} loading="lazy" />
    //     </figure>
    //   </Link>
    //   <button
    //     onClick={(e) => {
    //       e.preventDefault();
    //       if (!isFavourite) {
    //         dispatch(addToFavourite(resData));
    //       } else {
    //         dispatch(removeFromFavourite({ id }));
    //       }
    //     }}
    //     className="absolute top-2 right-2 focus:outline-none mt-2"
    //   >
    //     {isFavourite ? (
    //       <HeartIconSolid className="w-6 h-6 text-red-500" />
    //     ) : (
    //       <HeartIconOutline className="w-6 h-6 text-gray-400" />
    //     )}
    //   </button>
    //   <div className="card-body">
    //     <h2 className="card-title">{title?.substring(0, 20)}...</h2>
    //     <p>{description?.substring(0, 50)}</p>
    //     <small className="text-muted">₹{price}</small>

    //     <div className="card-actions justify-end">
    //       {rating > 0 ? (
    //         <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-500 text-white font-semibold text-lg rounded-full">
    //           <StarOutlineIcon className="h-6 w-6 text-yellow-500 " />
    //           <span>{rating}</span>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //       <button
    //         className={`btn ${
    //           isAddedToCart
    //             ? "btn btn-secondary flex items-center space-x-2"
    //             : "btn btn-primary flex items-center space-x-2"
    //         }`}
    //         onClick={(e) => {
    //           e.preventDefault();
    //           if (!isAddedToCart) {
    //             dispatch(addToCart(resData));
    //           } else {
    //             dispatch(removeFromCart({ id }));
    //           }
    //         }}
    //       >
    //         {isAddedToCart ? (
    //           <>
    //             <XCircleIcon className="h-5 w-5" />
    //             <span>Remove from Cart</span>
    //           </>
    //         ) : (
    //           <>
    //             <ShoppingCartIcon className="h-5 w-5" />
    //             <span>Add to Cart</span>
    //           </>
    //         )}
    //       </button>
    //     </div>
    //   </div>
      
    // </>
    <Link to={"/product/" + id}>
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: `url(${thumbnail})`}}> 
        <button
            className={`btn ${
              isAddedToCart
                ? "p-2 rounded-full bg-red-600 text-white mx-5 -mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-500 "
                : "p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
            {isAddedToCart ? (
              <>
                <XCircleIcon className="h-5 w-5"   />
                
              </>
            ) : (
              <>
                <ShoppingCartIcon className="h-5 w-5"  />
                
              </>
            )}
          </button>
            {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </button> */}
        </div>
        <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{title?.substring(0, 20)}...</h3>
            <span className="text-gray-500 mt-2">${price}</span>
        </div>
    </div>
    </Link>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return <RestaurantCard {...props} isSponsored={true} />;
  };
};

export default RestaurantCard;
