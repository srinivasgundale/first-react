import { useState, useEffect } from "react";
const useListOfCategories = () => {
  const [listOfCategories, setListOfCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const category = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const categoryJson = await category.json();
    console.log("🚀 ~ fetchData ~ categoryJson:", categoryJson);
    // Optional Chaining
    //setListOfRestraunt(json);
    setListOfCategories(categoryJson);
  };
  return listOfCategories;
};
export default useListOfCategories;
