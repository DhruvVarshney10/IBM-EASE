import React from "react";
import './Product.css'
import ProductOne from "./images/cereal.jfif"

function Product({title, Distance, Donor, rating, image}){
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                
                <p className="product__distance"> 
                    <strong>{Distance}</strong>
                    <small> Miles</small>
                </p>
                <div className="product__rating">
                    <text>Donor Name: </text>
                    <text>{Donor}</text>
                </div>
                <div className="product__rating">
                    <text>Donor Rating: </text>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
                
            </div>
            <img src={image} alt=""/>
            <button>Accept Item</button>
        </div>


        

      
    )
}

 export default Product