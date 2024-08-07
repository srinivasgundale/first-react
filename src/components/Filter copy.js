import React, { useState, useEffect } from "react";
import useListOfCategories from "./../utils/useListOfCategories";
const Filter = ({setData, setSearchInput, setHandleSearch}) => {
    

    const listOfCategories = useListOfCategories();
    const [searchText, setSearchText] = useState("");
    const handleSelect = (event) => {
        const slug = event.target.value;
        setData(slug);
    };
    const handleSearch = (e) => {
        console.log("🚀 ~ handleSearch ~ e:", e)
        setHandleSearch(e)
    }
    const handleOnChange = (val) => {
        console.log("🚀 ~ handleOnChange ~ val:", val)
        
        setSearchText(val);
        setSearchInput(val);
    }
    return (
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
            <li className="ml-5 nav-item">
                <input
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Search"
                    value={searchText}
                    onChange= {(e) => handleOnChange(e.target.value)}
                    onKeyPress={handleSearch}
                  />
              <a key={"form"} className="nav-link d-none">
                <div className="mb-2 form-group mx-sm-3">
                  
                  
                </div>
                <button
                  type="button"
                  className="my-2 btn btn-outline-success my-sm-0 d-none"
                //   onClick={() => {
                //     const filteredRestaurant = listOfRest.filter((res) =>
                //       res.title.toLowerCase().includes(searchText.toLowerCase())
                //     );
                //     setFilteredRestaurant(filteredRestaurant);
                //   }}
                >
                  Search
                </button>
                <button
                  type="button"
                  className="my-2 btn btn-outline-success my-sm-0 d-none"
                  //onClick={() => searchRestWithName(searchTextNew)}
                >
                  Search
                </button>
              </a>
            </li>
            <li className="nav-item d-none">
              {/* <span
                className="navbar-text"
                style={{ cursor: "pointer" }}
                onClick={toggleCartPopup}
              >
                <i className="bi bi-cart-fill"></i> {cart.items.length} item
                {cart.length !== 1 ? "s" : ""}{" "}
              </span> */}
            </li>
          </ul>
        </nav>
    );
}
export default Filter;