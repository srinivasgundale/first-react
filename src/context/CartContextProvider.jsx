import React, {useState} from "react";
import CartContext from "./CartContext";
const CartContextProvider = ({children}) => {

    const [cartItemsList, setCartItemsList] = useState(null);

    return (
        <CartContext.Provider value={{cartItemsList, setCartItemsList}}>
            {children}
        </CartContext.Provider>
    );

}
export default CartContextProvider;