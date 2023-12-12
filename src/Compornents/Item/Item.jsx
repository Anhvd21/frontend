import React from "react";
import "./Item.css";
const Item = (props) => {
    const formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
    });
    return (
        <div className="item">
            <a href={`/product/${props.uuid}`}>
                <img
                    onClick={window.scrollTo(0, 0)}
                    src={`http://localhost:8080/static/product/images/${props.image}`}
                    alt=""
                    width={"256px"}
                    height={"400px"}
                />
            </a>

            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    {formatter.format(props.new_price)}
                </div>
            </div>
        </div>
    );
};
export default Item;
