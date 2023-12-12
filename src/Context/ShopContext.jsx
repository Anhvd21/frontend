import React, {createContext, useState} from "react";
import all_product from "../Compornents/Assets/all_product"

export const ShopContext = createContext(null);
const getDefualtCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefualtCart());
    

    const addToCart =(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        console.log(cartItems);
    }
    const removeFromCart =(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const ContextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;