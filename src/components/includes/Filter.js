import React, { useState } from "react";
import useListOfCategories from "../../services/useListOfCategories";

const Filter = ({ setData, setSearchInput, setHandleSearch }) => {
  const listOfCategories = useListOfCategories();
  const [searchText, setSearchText] = useState("");

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
  };

  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select className="select select-bordered w-full" onChange={handleSelect}>
          <option key="all-categories">All Categories</option>
          <option key="top-products" value="top-products">TOP PRODUCTS</option>
          {listOfCategories.map((cat, index) => (
            <option key={index} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Search</label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={searchText}
          onChange={handleOnChange}
          onKeyPress={handleSearch} />
        
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <input type="range" min="0" max="100" className="range range-primary" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Rating</label>
        <select className="select select-bordered w-full">
          <option>All Ratings</option>
          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>
      <button className="btn hidden btn-primary w-full">Apply Filters</button>
    </div>
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
