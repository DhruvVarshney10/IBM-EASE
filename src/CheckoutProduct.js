import React from "react";
 import './CheckoutProduct.css'
 import {useStateValue} from "./StateProvider"

function CheckoutProduct({ title, Distance, Donor, rating, image }){
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
        })
    }
    return(
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>

            <p className="checkoutProduct__distance">
                
                <strong>{Distance}</strong>
                <small>  miles</small>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>
            
            <button onClick={removeFromBasket} >Remove from Basket</button>
            
        </div>
    </div>
    )
}
export default CheckoutProduct