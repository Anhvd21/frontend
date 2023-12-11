import React from "react";
import './ProductDissplay.css';
import star_icon from "../Assets/star_icon.png";
const ProductDissplay = (props) => {
    const {product} = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay_left">
                <div className="productdisplay_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay_img">
                    <img className="productdisplay_main_img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay_right">
                <h1> {product.name} </h1>
                <div className="productdisplay_right_star">
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
                <div className="productdisplay-right-size" >
                <h1>Select Size</h1>
                <div className="productdisplay-size" >
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Woman, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Mordern, Lastest</p>
            </div>

        </div>
        
    )
}
export default ProductDissplay