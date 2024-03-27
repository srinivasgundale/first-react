
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      category,
      description,
      id,
      image,
      price,
      rating,
      title
    } = resData;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img 
          className="res-logo"
          alt="res-logo"
          src={image}
        />
        <h3>{title}</h3>
        <h4>{description.substring(0, 50)}</h4>
        <h4>{rating.rate} stars</h4>
        <h4>₹{price}</h4>
        <h4>{category}</h4>
      </div>
    );
  };
  
  export default RestaurantCard;