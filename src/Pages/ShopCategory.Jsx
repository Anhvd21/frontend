import "./CSS/ShopCategory.css";
import dropdown_icon from "../Compornents/Assets/dropdown_icon.png";
import Item from "../Compornents/Item/Item";
import { useEffect, useState } from "react";
import axios from "axios";

const ShopCategory = ({ banner, category }) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/catalog/${category}`)
            .then((res) => setProduct(res.data.payload));
    }, [category]);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 product
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {products.map((item, i) => {
                    return (
                        <Item
                            key={item.product_id}
                            uuid={item.uuid}
                            name={item.name}
                            image={item.avatar}
                            new_price={item.price}
                        />
                    );
                })}
            </div>
            <div className="shopcategory-loadmore">Explore More</div>
        </div>
    );
};
export default ShopCategory;
