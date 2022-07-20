import { requirePropFactory } from "@mui/material";
import React from "react";
import "./home.css";
import HcImage from './images/homecover6.jpg'

function Home(){
    return <div className="home">
        <div className="home__container">
            <img className="home__image" src={HcImage} alt=""/>

            <div className="home__row">

            </div>

            <div className="home__row">

            </div>

            <div className="home__row">

            </div>
        
        </div>


    </div>
}
export default Home