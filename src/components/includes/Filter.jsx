import React, { useState, useRef } from "react";
import useListOfCategories from "../../services/useListOfCategories";

const Filter = ({
  setData,
  setSearchInput,
  setHandleSearch,
  setPriceRanger,
}) => {
  const listOfCategories = useListOfCategories();
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(100);
  const searchRef = useRef("");
  const handleSelect = (event) => {
    const slug = event.target.value;
    setData(slug);
  };

  const handleSearch = (e) => {
    setHandleSearch(e);
  };

  const handleOnChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
    setSearchInput(val);
    searchRef.current.focus();
  };
  const hadlePriceRange = (e) => {
    console.log("🚀 ~ hadlePriceRange ~ e:", e);
    setPriceRange(e);
    setPriceRanger(e);
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select
          className="w-full select select-bordered"
          onChange={handleSelect}
        >
          <option key="all-categories" value="all-categories">
            All
          </option>
          <option key="top-products" value="top-products">
            Top Rated
          </option>
          {listOfCategories.map((cat, index) => (
            <option key={index} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Search </label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered"
          value={searchText}
          onChange={handleOnChange}
          onKeyPress={handleSearch}
          ref={searchRef}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="temp" className="block mb-2">
          Price Range - {priceRange}
        </label>
        <input
          type="range"
          min={6}
          max={100}
          className="range range-primary"
          value={priceRange}
          list="markers"
          onChange={(e) => hadlePriceRange(e.target.value)}
        />
        <datalist id="markers">
          <option value="0"></option>
          <option value="25"></option>
          <option value="50"></option>
          <option value="75"></option>
          <option value="100"></option>
        </datalist>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Rating</label>
        <select className="w-full select select-bordered">
          <option>All Ratings</option>
          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>
      <button className="hidden w-full btn btn-primary">Apply Filters</button>
    </>
    // <nav className="navbar navbar-expand-lg navbar-light">
    //   <ul className="mr-auto navbar-nav">
    //     <li className="nav-item">
    //       <select className="form-select" onChange={handleSelect}>
    //         <option value="">Select Category</option>
    //         {listOfCategories.map((cat, index) => (
    //           <option key={index} value={cat.slug}>
    //             {cat.name}
    //           </option>
    //         ))}
    //         <option value="top-products">TOP PRODUCTS</option>
    //       </select>
    //     </li>
    //     <li className="ml-5 nav-item">
    //       <input
    //         type="text"
    //         className="form-control mr-sm-2"
    //         placeholder="Search"
    //         value={searchText}
    //         onChange={handleOnChange}
    //         onKeyPress={handleSearch}
    //       />
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Filter;
