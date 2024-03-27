
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
      
      
      <div className="card">
            <img className="card-image" src={image} alt="Avatar"  />
            <div className="card-container">
              <h4><b>{title}</b></h4>
              <p>{description.substring(0, 50)}</p>
              <p>{rating.rate} stars</p>
              <p>₹{price}</p>
              <p>{category}</p>
            </div>
      </div>

        
      
    );
  };
  
  export default RestaurantCard;