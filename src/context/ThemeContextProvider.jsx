import React, {useState} from "react";
import CartContext from "./ThemeContext";
const ThemeContextProvider = ({children}) => {

    const [themeMode, setThememode] = useState(false);

    return (
        <CartContext.Provider value={{themeMode, setThememode}}>
            {children}
        </CartContext.Provider>
    );

}
export default ThemeContextProvider;