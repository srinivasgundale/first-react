import RestaurantCard, { WithPromotedLable } from "./RestaurantCard";
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

  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      if (!prevCart.some((cartItem) => cartItem.id === item.id)) {
        return [...prevCart, item];
      }
      return prevCart;
    });
    console.log("🚀 ~ Body ~ cart:", cart);
  };
  //console.log("🚀 ~ useEffect ~ fetchData:");

  return listOfRest.length === 0 ? (
    <ShimmerCards />
  ) : (
    <main role="main" className="container">
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light categories-container">
          <ul className="mr-auto navbar-nav">
            {listOfCategories.map((cat, index) => (
              <li className="nav-item active">
                <a
                  key={index}
                  className=" nav-link"
                  onClick={() => {
                    const filteredList = listOfRest.filter(
                      (res) => res.category === cat
                    );
                    setFilteredRestaurant(filteredList);
                    console.log("🚀 ~ CategoryList ~ onClick:");
                  }}
                >
                  {cat.toUpperCase()}
                </a>
              </li>
              /*<CategoryList key={index} catData={cat} />*/
            ))}
            <li className="nav-item">
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
                TOP PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a key={"form"} className="nav-link">
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
                    className="my-2 btn btn-outline-success my-sm-0 d-none"
                    onClick={() => {
                      // Filter the restraunt cards and update the UI
                      // searchText
                      console.log(searchText);

                      const filteredRestaurant = listOfRest.filter((res) =>
                        res.title
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      );

                      setFilteredRestaurant(filteredRestaurant);
                    }}
                  >
                    Search
                  </button>
                </form>
              </a>
            </li>
            <li className="nav-item">
              <span className="navbar-text">
                Cart: {cart.length} item{cart.length !== 1 ? "s" : ""}
              </span>
            </li>
          </ul>
        </nav>
        <br />

        <div className="container">
          <div className="row">
            {filteredRestaurant.map((restaurant) => (
              <div className="col-md-3 rest-card">
                {restaurant.id == 1 ? (
                  <RestaurantCardPromoted
                    key={restaurant.id}
                    resData={restaurant}
                    addToCart={addToCart}
                    cart={cart}
                  />
                ) : (
                  <RestaurantCard
                    key={restaurant.id}
                    resData={restaurant}
                    addToCart={addToCart}
                    cart={cart}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
