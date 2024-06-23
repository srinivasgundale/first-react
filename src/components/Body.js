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
  console.log("🚀 ~ Body ~ listOfRest:", listOfRest);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("🚀 ~ Body ~ filteredRestaurant:", filteredRestaurant);

  const listOfCategories = useListOfCategories();
  console.log("🚀 ~ Body ~ listOfCategories:", listOfCategories);

  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState(loadCartFromLocalStorage());
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

    console.log("🚀 ~ addToCart ~ item:", item);

    setCart((prevCart) => {
      console.log("🚀 ~ setCart ~ prevCart:", prevCart);
      if (!Array.isArray(prevCart)) {
        console.error("Previous cart is not an array:", prevCart);
        return [];
      }

      const itemIndex = prevCart.findIndex((cartItem) => {
        console.log("🚀 ~ cartItem:", cartItem); // Log each cart item
        console.log("🚀 ~ cartItem.id:", cartItem.id === item.id);
        return cartItem.id === item.id;
      });
      if (itemIndex !== -1) {
        // If item is already in cart, remove it
        const updatedCart = [...prevCart];
        updatedCart.splice(itemIndex, 1);
        return updatedCart;
      } else {
        // If item is not in cart, add it
        return [...prevCart, item];
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
        <nav className="navbar navbar-expand-lg navbar-ligh">
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
                    console.log("🚀 ~ CategoryList ~ onClick:");
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
                      // Filter the restaurant cards and update the UI
                      console.log(searchText);

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
