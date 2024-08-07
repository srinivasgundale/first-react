import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import ShimmerCards from "./../components/ShimmerCards";
import useListOfRest from "./../utils/useListOfRest";
import CartPopup from "./CartPopup";
import Filter from "./Filter";
import useDebounce from './../utils/useDebounce';

const Body = () => {
  const { listOfRest } = useListOfRest();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 1000); // 500ms delay
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);

  useEffect(() => {
    if (debouncedSearchText) {
      console.log("🚀 ~ useEffect ~ debouncedSearchText:", debouncedSearchText)
      searchProduct(debouncedSearchText);
    } else {
      setFilteredRestaurant(listOfRest);
      console.log("🚀 ~ useEffect ~ listOfRest:", listOfRest)
    }
      
  }, [debouncedSearchText, listOfRest]);

  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const handleSelectNew = useCallback((slug) => {
    if (slug === "top-products") {
      setFilteredRestaurant(listOfRest.filter((res) => res.rating >= 4));
    } else {
      setFilteredRestaurant(listOfRest.filter((res) => res.category === slug));
    }
  }, [listOfRest]);

  const handleSearchNew = useCallback((e) => {
    if (e.key === "Enter") {
      setFilteredRestaurant(listOfRest.filter((res) =>
        res.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
      ));
    }
  }, [listOfRest, debouncedSearchText]);

  const handleSearchText = useCallback((val) => {
    setSearchText(val);
  }, []);

  const searchProduct = async (query) => {
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const json = await data.json();
    setFilteredRestaurant(json.products);
  };

  return (
    <main role="main" className="container">
      <div className="body">
        <Filter 
          setData={handleSelectNew} 
          setSearchInput={handleSearchText} 
          setHandleSearch={handleSearchNew} 
        />
        <br />
        {listOfRest.length === 0 ? (
          <ShimmerCards />
        ) : (
          <div className="fade-in container">
            <div className="card-deck row">
              {filteredRestaurant.map((restaurant) => (
                <div className="col-xs-12 col-sm-6 col-md-4 rest-card" key={restaurant.id}>
                  {restaurant.id === 1 ? (
                    <RestaurantCardPromoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
      </div>
    </main>
  );
};

export default Body;
