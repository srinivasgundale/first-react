import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import ShimmerCards from "./../components/ShimmerCards";
import useListOfRest from "./../utils/useListOfRest";
import useListOfCategories from "./../utils/useListOfCategories";
import CartPopup from "./CartPopup";

const Body = () => {
  const { listOfRest } = useListOfRest();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const listOfCategories = useListOfCategories();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const [searchText, setSearchText] = useState("");
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);

  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const handleSelect = (event) => {
    const slug = event.target.value;
    if (slug === "top-products") {
      const filteredList = listOfRest.filter((res) => res.rating.rate >= 4);
      setFilteredRestaurant(filteredList);
    } else {
      const filteredList = listOfRest.filter((res) => res.category === slug);
      setFilteredRestaurant(filteredList);
    }
  };

  return listOfRest.length === 0 ? (
    <ShimmerCards />
  ) : (
    <main role="main" className="container">
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="mr-auto navbar-nav">
            <li className="nav-item">
              <select className="form-select" onChange={handleSelect}>
                <option value="">Select Category</option>
                {listOfCategories.map((cat, index) => (
                  <option key={index} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
                <option value="top-products">TOP PRODUCTS</option>
              </select>
            </li>
            <li className="nav-item active">
              <a key={"form"} className="nav-link">
                <form className="form-inline">
                  <div className="mb-2 form-group mx-sm-3">
                    <input
                      type="text"
                      className="form-control mr-sm-2"
                      placeholder="Search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                  <button
                    className="my-2 btn btn-outline-success my-sm-0 d-none"
                    onClick={() => {
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
              <span
                className="navbar-text"
                style={{ cursor: "pointer" }}
                onClick={toggleCartPopup}
              >
                <i className="bi bi-cart-fill"></i> {cart.length} item
                {cart.length !== 1 ? "s" : ""}{" "}
              </span>
            </li>
          </ul>
        </nav>
        <br />
        <div className="container">
          <div className="row">
            {filteredRestaurant.map((restaurant) => (
              <div
                className="col-md-4 d-flex align-items-stretch rest-card"
                key={restaurant.id}
              >
                {restaurant.id === 1 ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </div>
            ))}
          </div>
        </div>
        {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
      </div>
    </main>
  );
};

export default Body;
