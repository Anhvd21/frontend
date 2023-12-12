import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png"
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="caritems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div key={e.id}>
                    <div className="cartitems-format caritems-format-main">
                        <img src={e.image} alt="" className="icon"/>
                        <p>{e.name} </p>
                        <p> ${e.new_price} </p>
                        <button className="cartitems-quantity">{cartItems[e.id]} </button>
                        <p>${e.new_price*cartItems[e.id]} </p>
                        <img className="remove_icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmount}</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
export default CartItems