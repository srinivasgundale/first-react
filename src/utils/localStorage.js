export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cartData", JSON.stringify(cart));
};

export const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartData");
  try {
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    console.error("Failed to parse cart data from local storage", e);
    return [];
  }
};
