import { useState, useEffect } from "react";
import {PRODUCTS_ENDPOINT} from "../utils/constants"
const useListOfRest = () => {
  const [listOfRest, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PRODUCTS_ENDPOINT);
    const json = await data.json();
    console.log("🚀 ~ useListOfRest ~ fetchData ~ json:", json.products);
    setListOfRestraunt(json.products);
  };
  return { listOfRest };
};
export default useListOfRest;
