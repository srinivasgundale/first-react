import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLable } from "./RestaurantCard";
import ShimmerCards from "./../components/ShimmerCards";
import useListOfRest from "./../utils/useListOfRest";
import useListOfCategories from "./../utils/useListOfCategories";
import {
  saveCartToLocalStorage,
  loadCartFromLocalStorage,
} from "./../utils/localStorage";
import CartPopup from "./CartPopup";

const Body = () => {
  const { listOfRest } = useListOfRest();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const listOfCategories = useListOfCategories();
  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = loadCartFromLocalStorage();
    return Array.isArray(savedCart) ? savedCart : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setFilteredRestaurant(listOfRest);
  }, [listOfRest]);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (item) => {
    if (!item || !item.id) {
      console.error("Item is undefined or has no id:", item);
      return;
    }

    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("Previous cart is not an array:", prevCart);
        return [];
      }

      const validCart = prevCart.filter((cartItem) => cartItem && cartItem.id);

      const itemIndex = validCart.findIndex((cartItem) => {
        if (!cartItem || !cartItem.id) {
          console.error("Cart item is undefined or has no id:", cartItem);
          return false; // Skip undefined or invalid cart items
        }
        return cartItem.id === item.id;
      });

      if (itemIndex !== -1) {
        const updatedCart = [...validCart];
        updatedCart.splice(itemIndex, 1);
        return updatedCart;
      } else {
        return [...validCart, item];
      }
    });
  };

  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return listOfRest.length === 0 ? (
    <ShimmerCards />
  ) : (
    <main role="main" className="container">
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="mr-auto navbar-nav">
            {listOfCategories.map((cat, index) => (
              <li className="nav-item active" key={index}>
                <a
                  className="nav-link"
                  onClick={() => {
                    const filteredList = listOfRest.filter(
                      (res) => res.category === cat
                    );
                    setFilteredRestaurant(filteredList);
                  }}
                >
                  {cat.toUpperCase()}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                key={"all"}
                className="nav-link"
                onClick={() => {
                  const filteredList = listOfRest.filter(
                    (res) => res.rating.rate >= 4
                  );
                  setFilteredRestaurant(filteredList);
                }}
              >
                TOP PRODUCTS
              </a>
            </li>
            <li className="nav-item active">
              <a key={"form"} className="nav-link">
                <form className="form-inline">
                  <div className="mb-2 form-group mx-sm-3">
                    <input
                      type="text"
                      className="form-control mr-sm-2"
                      placeholder="Search"
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="my-2 btn btn-outline-success my-sm-0 d-none"
                    onClick={() => {
                      const filteredRestaurant = listOfRest.filter((res) =>
                        res.title
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      );
                      setFilteredRestaurant(filteredRestaurant);
                    }}
                  >
                    Search
                  </button>
                </form>
              </a>
            </li>
            <li className="nav-item">
              <span
                className="navbar-text"
                style={{ cursor: "pointer" }}
                onClick={toggleCartPopup}
              >
                Cart: {cart.length} item{cart.length !== 1 ? "s" : ""}{" "}
                <i className="bi bi-cart-fill"></i>
              </span>
            </li>
          </ul>
        </nav>
        <br />
        <div className="container">
          <div className="row">
            {filteredRestaurant.map((restaurant) => (
              <div className="col-md-3 rest-card" key={restaurant.id}>
                {restaurant.id === 1 ? (
                  <RestaurantCardPromoted
                    resData={restaurant}
                    addToCart={addToCart}
                    cart={cart}
                  />
                ) : (
                  <RestaurantCard
                    resData={restaurant}
                    addToCart={addToCart}
                    cart={cart}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {isCartOpen && <CartPopup cart={cart} onClose={toggleCartPopup} />}
      </div>
    </main>
  );
};

export default Body;
