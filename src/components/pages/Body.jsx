import React, { useState, useEffect, useCallback, lazy, Fragment } from "react";
import { useSelector } from "react-redux";
import RestaurantCard, { WithPromotedLabel } from "../includes/RestaurantCard";
import ShimmerCards from "../common/ShimmerCards";
import useListOfRest from "../../services/useListOfRest";
import CartPopup from "../includes/CartPopup";
import Filter from "../includes/Filter";
import useDebounce from '../../hooks/useDebounce';
import Loader from '../../styles/Loader';
import { HomeBanner } from "../includes/HomeBanner";
import ReactGA from "react-ga4";
const Footer = lazy(() => import("../includes/HomeBanner"));
//import { ClipLoader } from 'react-spinners';
const Body = () => {
  ReactGA.send({
    hitType: "pageview",
          page:"/",
          title:"Shop"	
  });
  const { listOfRest } = useListOfRest();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 1000); // 500ms delay
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);

  useEffect(() => {
    if (debouncedSearchText) {
      //console.log("🚀 ~ useEffect ~ debouncedSearchText:", debouncedSearchText)
      searchProduct(debouncedSearchText);
    } else {
      setFilteredRestaurant(listOfRest);
      //console.log("🚀 ~ useEffect ~ listOfRest:", listOfRest)
    }
      
  }, [debouncedSearchText, listOfRest]);
  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);
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
    <main role="main" className="container mx-auto">
      <HomeBanner />
      <div className="body">
        
        <br />
        {listOfRest.length === 0 ? (
          <ShimmerCards />
        ) : (
          <>
          <div className="hidden">
            {loading ? (<><Loader /> </>) : ''}
          </div>
          <div className="flex flex-col md:flex-row p-4">
          <div className="w-full bg-base md:w-1/4 mb-4 md:mb-0 p-4 rounded-lg  h-full glass">
          
            <Filter 
              setData={handleSelectNew} 
              setSearchInput={handleSearchText} 
              setHandleSearch={handleSearchNew} 
            />
          </div>
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              
                {filteredRestaurant.map((restaurant) => (
                  <Fragment className="" key={restaurant.id}>
                    {restaurant.id === 1 ? (
                      <RestaurantCardPromoted resData={restaurant} />
                    ) : (
                      <RestaurantCard resData={restaurant} />
                    )}
                  </Fragment>
                ))}
              
            </div>
            </div>
          </>
        )}
        {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
      </div>
    </main>
  );
};

export default Body;
