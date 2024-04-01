import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCards from "./../components/ShimmerCards";
import useListOfRest from "./../utils/useListOfRest";
import useListOfCategories from "./../utils/useListOfCategories";
const Body = () => {
  const { listOfRest } = useListOfRest();
  console.log("🚀 ~ Body ~ listOfRest:", listOfRest);

  // local state variable
  // the below syntax is de structuring the use state returned array

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("🚀 ~ Body ~ filteredRestaurant:", filteredRestaurant);

  const listOfCategories = useListOfCategories();
  console.log("🚀 ~ Body ~ listOfCategories:", listOfCategories);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);
  //console.log("🚀 ~ useEffect ~ fetchData:");

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
            <div className="mb-2 form-group mx-sm-3">
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
              className="my-2 btn btn-outline-success my-sm-0"
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

        <div className="container">
          <div className="row">
            {filteredRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
