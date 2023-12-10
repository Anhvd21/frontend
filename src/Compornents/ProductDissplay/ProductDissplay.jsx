import React from "react";
import './ProductDissplay.css';
import star_icon from "../Assets/star_icon.png";
const ProductDissplay = (props) => {
    const {product} = props;
    return (
        <div className='productdissplay'>
            <div className="productdissplay_left">
                <div className="productdissplay_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdissplay_img">
                    <img className="productdissplay_main_img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdissplay_right">
                <h1> {product.name} </h1>
                <div className="productdissplay_right_star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old" >${product.old_price}</div>
                    <div className="productdisplay-right-price-new" >${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Feel free to customize the template based on the specific details of the shirt you're describing. Include information about the fabric, color, design features, and any unique qualities that make the shirt stand out.
                </div>
            </div>
            <div className="productdisplay-right-size" >
                <h1>Select Size</h1>
                <div className="productdisplay-size" ></div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Woman, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Mordern, Lastest</p>
        </div>
        
    )
}
export default ProductDissplay