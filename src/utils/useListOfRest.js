import { useState, useEffect } from "react";
const useListOfRest = () => {
  const [listOfRest, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log("🚀 ~ useListOfRest ~ fetchData ~ json:", json);
    setListOfRestraunt(json);
  };
  return { listOfRest };
};
export default useListOfRest;
