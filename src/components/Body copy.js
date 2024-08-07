import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import ShimmerCards from "./../components/ShimmerCards";
import useListOfRest from "./../utils/useListOfRest";
//import useListOfCategories from "./../utils/useListOfCategories";
import CartPopup from "./CartPopup";
import Filter from "./Filter";

const Body = () => {
  const { listOfRest } = useListOfRest();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //const [searchFilteredRestaurant, setSearchFilteredRestaurant] = useState([]);
  //const listOfCategories = useListOfCategories();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const [searchText, setSearchText] = useState("");
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
 
  //const [searchTextNew, setSearchTextNew] = useState("TEST");
  useEffect(() => {
    setFilteredRestaurant(listOfRest);
    //setSearchFilteredRestaurant(listOfRest)
  }, [listOfRest]);
  useEffect(() =>{
    console.log("calling use effect when searchtext changes");
    searchProduct();
  },[searchText]);
  
  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // const handleSelect = (event) => {
  //   const slug = event.target.value;
  //   if (slug === "top-products") {
  //     const filteredList = listOfRest.filter((res) => res.rating >= 4);
  //     setFilteredRestaurant(filteredList);
  //   } else {
  //     const filteredList = listOfRest.filter((res) => res.category === slug);
  //     setFilteredRestaurant(filteredList);
  //   }
  // };
  const handleSearchText = (val) => {
    setSearchText(val);
  }
  const handleSelectNew = (val) => {
    const slug = val;
    if (slug === "top-products") {
      const filteredList = listOfRest.filter((res) => res.rating >= 4);
      setFilteredRestaurant(filteredList);
    } else {
      const filteredList = listOfRest.filter((res) => res.category === slug);
      setFilteredRestaurant(filteredList);
    }
  };
  // const handleSearch = (e) => {
  //   if (e.key === "Enter") {
  //     const filteredRestaurant = listOfRest.filter((res) =>
  //       res.title.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     //searchProduct();
  //     setFilteredRestaurant(filteredRestaurant);
  //   }
  // };
  const handleSearchNew = (e) => {
    if (e.key === "Enter") {
      const filteredRestaurant = listOfRest.filter((res) =>
        res.title.toLowerCase().includes(searchText.toLowerCase())
      );
      //searchProduct();
      setFilteredRestaurant(filteredRestaurant);
    }
  };
  // const onChangeInput = (e) => {
  //   setSearchTextNew(e);
  // };
  // const searchRestWithName = (text) => {
  //   console.log("🚀 ~ searchRestWithName ~ text:", text)
  //   console.log("🚀 ~ searchRestWithName ~ text:", listOfRest)
  //   const filteredRestaurant = listOfRest.filter((res) =>
  //     res.title.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setFilteredRestaurant(filteredRestaurant);
  // };
  async function searchProduct () {
    const data = await fetch('https://dummyjson.com/products/search?q='+searchText)
    const json = await data.json()
    setFilteredRestaurant(json.products);
    console.log("🚀 ~ fetchFirstProduct ~ json:", json)
  }
  return  (
    <main role="main" className="container">
      
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* <ul className="mr-auto navbar-nav">
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
                <div className="mb-2 form-group mx-sm-3">
                  <input
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleSearch}
                  />
                  <input
                    type="text"
                    className="form-control mr-sm-2 d-none"
                    placeholder="Search"
                    value={searchTextNew}
                    onChange={ (e) => setSearchTextNew(e.target.value)}
                    
                  />
                </div>
                <button
                  type="button"
                  className="my-2 btn btn-outline-success my-sm-0 d-none"
                  onClick={() => {
                    const filteredRestaurant = listOfRest.filter((res) =>
                      res.title.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurant);
                  }}
                >
                  Search
                </button>
                <button
                  type="button"
                  className="my-2 btn btn-outline-success my-sm-0 d-none"
                  onClick={() => searchRestWithName(searchTextNew)}
                >
                  Search
                </button>
              </a>
            </li>
            <li className="nav-item d-none">
              <span
                className="navbar-text"
                style={{ cursor: "pointer" }}
                onClick={toggleCartPopup}
              >
                <i className="bi bi-cart-fill"></i> {cart.items.length} item
                {cart.length !== 1 ? "s" : ""}{" "}
              </span>
            </li>
          </ul> */}
        </nav>
        <Filter setData={handleSelectNew} setSearchInput={handleSearchText} setHandleSearch={handleSearchNew} /> 
        <br />
        { listOfRest.length === 0 ? (<ShimmerCards />)  : (
        <div className="fade-in container">
          <div className="card-deck row">
            {filteredRestaurant.map((restaurant) => (
              <div
                className="col-xs-12 col-sm-6 col-md-4 rest-card"
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
        ) }
        {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
      </div>
    </main>
  );
};

export default Body;
