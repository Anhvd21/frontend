import React from "react";
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = ({ product }) => {

    console.log("product", product)

    return (
        <div className="breadcrum">
            {product ? <>
                <div>Home</div>
                <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
            </>
                :
                <div>Product not found</div>
            }
        </div>
    )
}
export default Breadcrum