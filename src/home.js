import { requirePropFactory } from "@mui/material";
import React from "react";
import "./home.css";
import HcImage from './images/checkoutimg2.jpg'
import Product from "./Product";
import cereal from "./images/cereal.jfif"
import spam from "./images/spam.jpg"
import jeans from "./images/jeans.webp"
import corncan from "./images/corncan.png"
import papertowls from "./images/papertowel.webp"
import beans from "./images/beans.webp"
import milk from "./images/milk.webp"




function Home(){
    return <div className="home">
        <div className="home__container">
            <img className="home__image" src={HcImage} alt=""/>

            <div className="home__row"> 
                <Product title="Mini Wheat cereal"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={3}
                image={cereal}/>
                
                <Product title="Spam"
                Distance={1.5}
                Donor="Joe McFlurry"
                rating={4}
                image={spam}/>

            <Product title="Clothing: jeans"
                Distance={2.5}
                Donor="Nick Boys"
                rating={4}
                image={jeans}/>
                
            </div>

            <div className="home__row">
                <Product title="Beans"
                Distance={2.5}
                Donor="Food Supply"
                rating={4}
                image={beans}/>
                
                <Product title="Masks"
                Distance={0.5}
                Donor="Help Cure"
                rating={5}
                image={cereal}/>
                
            </div>

            <div className="home__row">
                <Product title="Milk"
                Distance={2.5}
                Donor="Cow Company"
                rating={5}
                image={milk}/>

                <Product title="Corncan"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={corncan}/>

                <Product title="Stuff for Women"
                Distance={2.5}
                Donor="Mike Hammy"
                rating={5}
                image={cereal}/>
               
             </div>


            <div className="home__row">
                <Product title="Papertowels"
                    Distance={2.5}
                    Donor="Help Cure"
                    rating={5}
                    image={papertowls}/>

                    <Product title="Sanitary Product"
                    Distance={2.5}
                    Donor="Mike Hammy"
                    rating={5}
                    image={cereal}/>

                    <Product title="Stuff for Women"
                    Distance={2.5}
                    Donor="Mike Hammy"
                    rating={5}
                    image={cereal}/>
            </div>

           
        
        </div>


    </div>
}
export default Home