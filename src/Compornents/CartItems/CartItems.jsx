import React, { useContext, useState, useEffect } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    const [itemsInCart, setItemsInCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (all_product.length > 0 && all_product.length > 0) {
            let newSubtotal = 0;
            const newCartItems = all_product.filter(item => cartItems[item.id] > 0);

            console.log("newCartItems", newCartItems)

            newCartItems.forEach(item => { newSubtotal += item.new_price * cartItems[item.id] })


            setItemsInCart(newCartItems);
            setSubtotal(newSubtotal);
        }
    }, [all_product, cartItems])


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
            {itemsInCart.map((item) => <div key={item.id}>
                <div className="cartitems-format caritems-format-main">
                    <img src={item.image} alt="" className="icon" />
                    <p>{item.name} </p>
                    <p> ${item.new_price} </p>
                    <button className="cartitems-quantity">{cartItems[item.id]} </button>
                    <p>${item.new_price * cartItems[item.id]} </p>
                    <img className="remove_icon" src={remove_icon} onClick={() => { removeFromCart(item.id) }} alt="" />
                </div>
                <hr />
            </div>)}

            <div className="cartitems-down">
                <div className="total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="total-item">
                            <p>Subtotal</p>
                            <p>{subtotal}</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Total</p>
                            <p>{subtotal}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
export default CartItems