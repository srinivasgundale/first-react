import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import RestaurantCard, { WithPromotedLabel } from "../includes/RestaurantCard";
import ShimmerCards from "../common/ShimmerCards";
import useListOfRest from "../../services/useListOfRest";
import CartPopup from "../includes/CartPopup";
import Filter from "../includes/Filter";
import useDebounce from '../../hooks/useDebounce';
import Loader from '../../styles/Loader';
//import { ClipLoader } from 'react-spinners';
const Body = () => {
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
      console.log("🚀 ~ useEffect ~ debouncedSearchText:", debouncedSearchText)
      searchProduct(debouncedSearchText);
    } else {
      setFilteredRestaurant(listOfRest);
      console.log("🚀 ~ useEffect ~ listOfRest:", listOfRest)
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
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="body">
        
        <br />
        {listOfRest.length === 0 ? (
          <ShimmerCards />
        ) : (
          <>
          <div className="hidden">
            {loading ? (<><Loader /> </>) : ''}
          </div>
          <div className="flex p-4">
            <Filter 
              setData={handleSelectNew} 
              setSearchInput={handleSearchText} 
              setHandleSearch={handleSearchNew} 
            />
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              
                {filteredRestaurant.map((restaurant) => (
                  <div className="card w-full bg-base-100 shadow-xl" key={restaurant.id}>
                    {restaurant.id === 1 ? (
                      <RestaurantCardPromoted resData={restaurant} />
                    ) : (
                      <RestaurantCard resData={restaurant} />
                    )}
                  </div>
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
