import { requirePropFactory } from "@mui/material";
import React from "react";
import "./home.css";
import HcImage from './images/homecover6.jpg'
import Product from "./Product";
import cereal from "./images/cereal.jfif"

function Home(){
    return <div className="home">
        <div className="home__container">
            <img className="home__image" src={HcImage} alt=""/>

            <div className="home__row"> 
                <Product title="Mini Wheat cereal"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>
            </div>

            <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className="home__row">

            </div>
        
        </div>


    </div>
}
export default Home