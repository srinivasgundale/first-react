import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import favouriteReducer from "./favouriteSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    favourites: favouriteReducer
  },
});

export default store;
