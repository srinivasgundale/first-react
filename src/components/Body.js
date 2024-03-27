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
  const [searchText, setSearchText] = useState("");
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
    <main role="main" className="container">
      <div className="body">
        <nav className="nav categories-container">
          {listOfCategories.map((cat, index) => (
            <a
              key={index}
              className="nav-link active"
              onClick={() => {
                const filteredList = listOfRest.filter(
                  (res) => res.category === cat
                );
                setFilteredRestaurant(filteredList);
                console.log("🚀 ~ CategoryList ~ onClick:");
              }}
            >
              {cat}
            </a>
            /*<CategoryList key={index} catData={cat} />*/
          ))}
          <a
            key={"all"}
            className="nav-link"
            onClick={() => {
              const filteredList = listOfRest.filter(
                (res) => res.rating.rate >= 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Products
          </a>
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={() => {
                // Filter the restraunt cards and update the UI
                // searchText
                console.log(searchText);

                const filteredRestaurant = listOfRest.filter((res) =>
                  res.title.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </form>
        </nav>
        <br />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
