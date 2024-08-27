import React, { useState, useEffect } from "react";
import ShimmerCards from "../common/ShimmerCards";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingCartIcon,
  XCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import ReactGA from "react-ga4";
const ProductDetail = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Product Detail",
  });
  const [product, setProductDetail] = useState([]);
  const { id } = useParams();
  console.log("🚀 ~ ProductDetail ~ id:", id);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Ensure cart is an array
  const isAddedToCart = cartItems.some(
    (cartItem) => cartItem?.id === product.id
  );
  console.log("🚀 ~ ProductDetail ~ product:", product);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ useEffect:");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products/" + id);

    const json = await data.json();
    console.log("🚀 ~ fetchData ~ json:", json.products);

    // Optional Chaining
    setProductDetail(json);
  };
  //return (<div>Hello</div>);
  return product.length === 0 ? (
    <ShimmerCards />
  ) : (
    // <RestaurantCard  resData={productDetail} />
    <div className="bg-base">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-base-500 hover:text-base-600"
              >
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
            <img
              alt={product.title}
              src={product.thumbnail}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-base-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-base-900">
              ${product.price}
            </p>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-base-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-base-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-base-600">{product.description}</p>
              </div>
              <button
                className={`btn ${
                  isAddedToCart
                    ? "btn btn-secondary flex items-center space-x-2 mt-10"
                    : "btn btn-primary flex items-center space-x-2 mt-10"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isAddedToCart) {
                    dispatch(addToCart(product));
                  } else {
                    dispatch(removeFromCart(product));
                  }
                }}
              >
                {isAddedToCart ? (
                  <>
                    <TrashIcon className="w-5 h-5" />
                    Remove from Cart
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
