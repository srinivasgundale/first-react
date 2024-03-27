import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import ShimmerCards from "./../components/ShimmerCards";
import { useEffect } from "react";

const Body = () => {
  // local state variable
  // the below syntax is de structuring the use state returned array
  const [listOfRest, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("🚀 ~ useEffect ~ fetchData:");
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const json = await data.json();
    console.log("🚀 ~ fetchData ~ json:", json);
    const category = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const categoryJson = await category.json();
    console.log("🚀 ~ fetchData ~ categoryJson:", categoryJson);
    // Optional Chaining
    setListOfRestraunt(json);
    setListOfCategories(categoryJson);
    setFilteredRestaurant(json);
  };
  return listOfRest.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="body">
      <div className="cat-container btn-group">
        <ul>
          {listOfCategories.map((cat, index) => (
            <li key={index}>
              <button
                className=" button"
                onClick={() => {
                  const filteredList = listOfRest.filter(
                    (res) => res.category === cat
                  );
                  setFilteredRestaurant(filteredList);
                  console.log("🚀 ~ CategoryList ~ onClick:");
                }}
              >
                {cat}
              </button>
            </li>
            /*<CategoryList key={index} catData={cat} />*/
          ))}
          <li>
            <button
              className=" button"
              onClick={() => {
                const filteredList = listOfRest.filter(
                  (res) => res.rating.rate >= 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Products
            </button>
          </li>
        </ul>
      </div>
      <br />
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
