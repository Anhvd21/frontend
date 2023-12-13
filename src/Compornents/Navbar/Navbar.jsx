import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const isAuthenticate = useSelector((state) => state.auths.isAuthenticate);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                >
                    <Link style={{ textDecoration: "none" }} to="/">
                        Shop
                    </Link>{" "}
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("mens");
                    }}
                >
                    <Link style={{ textDecoration: "none" }} to="/ao-nam">
                        Áo nam
                    </Link>{" "}
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("womens");
                    }}
                >
                    <Link style={{ textDecoration: "none" }} to="/quan-nam">
                        Quần nam
                    </Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                >
                    <Link style={{ textDecoration: "none" }} to="/phu-kien-nam">
                        Phụ kiện nam
                    </Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                {!isAuthenticate && (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
