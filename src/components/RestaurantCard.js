import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { category, description, id, image, price, rating, title } = resData;

  return (
    <div className="col-md-4">
      <Link className="col-md-3 card-link" key={id} to={"/product/" + id}>
        <div className="mb-4 shadow-sm card">
          <img className="card-img-top" src={image} alt="Avatar" />
          <div className="card-body">
            <p className="card-title">{title?.substring(0, 20)}...</p>
            <p className="card-text">{description?.substring(0, 50)}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {rating?.rate} stars
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {category}
                </button>
              </div>
              <small className="text-muted">₹{price}</small>
            </div>

            <button className="mt-2 btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
