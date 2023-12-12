import React, { useState, useEffect } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import axios from "axios";

const NewCollections = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/product/collection")
            .then((res) => {
                setCollection(res.data.payload);
            });
    }, []);

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
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
export default NewCollections;
