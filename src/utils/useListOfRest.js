import { useState, useEffect } from "react";
const useListOfRest = () => {
  const [listOfRest, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log("🚀 ~ useListOfRest ~ fetchData ~ json:", json.products);
    setListOfRestraunt(json.products);
  };
  return { listOfRest };
};
export default useListOfRest;
