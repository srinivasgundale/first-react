import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData, addToCart, cart } = props;
  console.log("🚀 ~ RestaurantCard ~ resData:", resData);
  const { category, description, id, image, price, rating, title } = resData;
  console.log("🚀 ~ RestaurantCard ~ id:", id);

  const isAddedToCart = cart.some((cartItem) => cartItem.id === id);
  console.log("🚀 ~ RestaurantCard ~ isAddedToCart:", isAddedToCart);
  return (
    /*<Link className="col-md-3 card-link" key={id} to={"/product/" + id}>*/
    <div className="mb-4 shadow-sm card">
      <img className="card-img-top" src={image} alt="Avatar" />
      <div className="card-body">
        <p className="card-title">{title?.substring(0, 20)}...</p>
        <p className="card-text">{description?.substring(0, 50)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              {rating?.rate} stars
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              {category}
            </button>
          </div>
          <small className="text-muted">₹{price}</small>
        </div>

        <button
          className={`mt-2 btn ${isAddedToCart ? "btn-danger" : "btn-primary"}`}
          onClick={(e) => {
            e.preventDefault();
            addToCart(resData);
          }}
        >
          {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
    /*</Link>*/
  );
};

export const WithPromotedLable = (RestaurantCard) => {
  return (props) => {
    /*const { resData, addToCart, cart } = props;
    const { category, description, id, image, price, rating, title } = resData;
    const isAddedToCart = cart.some((cartItem) => cartItem.id === id);*/
    return (
      <>
        <span className="btn btn-info sponsed-lable">Sponsored</span>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
