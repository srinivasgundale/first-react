import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import ShimmerCards from './ShimmerCards';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ ProductDetail ~ productId:", id)
    useEffect(() => {
        console.log("🚀 ~ useEffect ~ useEffect:")
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products/"+id);

        const json = await data.json();
        console.log("🚀 ~ fetchData ~ json:", json);
        
        // Optional Chaining
        setProductDetail(json);
        
    };
    //return (<div>Hello</div>);
  return productDetail.length === 0 ? ( <ShimmerCards /> ) : (
    <RestaurantCard  resData={productDetail} /> 
  )
}
export default ProductDetail
