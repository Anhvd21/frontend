import React from "react";
import Hero from "../Compornents/Hero/Hero"
import Popular from "../Compornents/Popular/Popular";
import Offers from "../Compornents/Offer/Offers";
import NewCollections from "../Compornents/NewCollections/NewCollections";
import NewLetter from "../Compornents/NewLetter/NewLetter";
const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewLetter/>
            
        </div>
    )
}
export default Shop
