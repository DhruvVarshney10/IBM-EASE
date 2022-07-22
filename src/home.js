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

                <Product title="Clothing: Tops"
                Distance={1.5}
                Donor="Joe McFlurry"
                rating={4}
                image={cereal}/>
                <Product/>
            </div>

            <div className="home__row">
                <Product title="Clothing: Bottoms"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>

                <Product title="Masks"
                Distance={0.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>
            </div>

            <div className="home__row">

                <Product title="Utensils"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>

                <Product title="Hand Sanitizers"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>

            </div>

            <div className="home__row">
                <Product title="Cleaning Stuff"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>

                <Product title="Stuff for Women"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>
            </div>

            <div className="home__row">
            <Product title="Bags"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
                <Product/>
            </div>
        
        </div>


    </div>
}
export default Home