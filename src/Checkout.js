import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import CheckoutBack from "./images/checkoutimg2.jpg";
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Checkout(){
    const [{ basket, user }, dispatch] = useStateValue();
    return(
        <div className="Checkout">   
            <div className="checkout__left">
                
               <img className="checkout__ad" src={CheckoutBack} alt=""/>
                
                <div><h2 className="basket_title">Your donation Basket</h2>
                
                {basket.map(item => (
                <CheckoutProduct
              title={item.title}
              Distance={item.Distance}
              Donor={item.Donor}
              rating={item.rating}
              image={item.image}
            />
          ))}
                
                </div>
            </div>  
            <div className="checkout__right">
                <Subtotal/>
            </div>   
        </div>
    );
}
export default Checkout;