import React from "react";
import './Product.css'
import ProductOne from "./images/cereal.jfif"
import {useStateValue} from "./StateProvider"

function Product({title, Distance, Donor, rating, image}){
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            title: title,
            Distance: Distance,
            Donor: Donor,
            rating: rating,
            image: image,
          },
        });
      };
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
                    <text>{ Donor}</text>
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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>


        

      
    )
}

 export default Product