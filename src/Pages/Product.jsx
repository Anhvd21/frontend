import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Compornents/Breadcrums/Breadcrums";
import ProductDissplay from "../Compornents/ProductDissplay/ProductDissplay";
import RelateProduct from "../Compornents/RelateProduct/RelateProduct";
const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams();

    console.log("productId", productId);

    const product = all_product.find((e) => e.id === Number(productId));

    console.log("product", product);


    return (
        <div>
            <Breadcrum product={product} />
            <ProductDissplay product={product} />
            <RelateProduct />
        </div>
    )
}
export default Product