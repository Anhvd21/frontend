import React, { useState, useEffect } from "react";
import "./RelateProduct.css";
import Item from "../Item/Item";
import axios from "axios";

const RelateProduct = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/product/collection")
            .then((res) => {
                setCollection(res.data.payload);
            });
    }, []);
    return (
        <div className="relateproduct">
            <h1>Relate Products</h1>
            <hr />
            <div className="relateproduct-item">
                {collection.map((item, i) => {
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
        </div>
    );
};
export default RelateProduct;
