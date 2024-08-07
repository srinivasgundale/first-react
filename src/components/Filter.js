import React, { useState } from "react";
import useListOfCategories from "./../utils/useListOfCategories";

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
            onChange={handleOnChange}
            onKeyPress={handleSearch}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Filter;
