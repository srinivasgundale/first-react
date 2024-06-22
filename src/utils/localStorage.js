export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cartData", JSON.stringify(cart));
};

export const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartData");
  return savedCart ? JSON.parse(savedCart) : [];
};
