import React from "react";
import './NewLetter.css'
const NewLetter = () => {
    return (
        <div className="newLetter">
            <h1> Get Exclusive Ofeers On Yout Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
            <input type="email" placeholder="Your Email"  />
            <button>Subscribe</button>
            </div>
            
        </div>
    )
}
export default NewLetter