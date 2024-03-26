import RestaurantCard from "./RestaurantCard"
import resList from "./../utils/mockdata"
import { useState } from 'react'
const Body = () => {
    const [listOfRest, setListOfRest] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRest.filter(
                    (res) => res.data.avgRating <= 4
                );
                setListOfRest(filteredList);
            }}>Filter</button>
        </div>
        <div className="search">Search</div>
        <div className="res-container">
          {listOfRest.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;  