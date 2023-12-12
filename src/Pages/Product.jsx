import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Compornents/Breadcrums/Breadcrums";
import ProductDissplay from "../Compornents/ProductDissplay/ProductDissplay";
import RelateProduct from "../Compornents/RelateProduct/RelateProduct";
import axios from "axios";

const Product = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/product/${productId}`)
            .then((res) => setProduct(res.data.payload));
    }, [productId]);

    console.log("product", product);

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDissplay product={product} />
            <RelateProduct />
        </div>
    );
};
export default Product;
