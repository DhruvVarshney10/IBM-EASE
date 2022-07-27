import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "C:/Users/dhruv/Desktop/LilCoders/firstapp/src/StateProvider.js";
import { getBasketTotal } from "./reducer";

function Subtotal(){
    const [{basket}, dispatch] = useStateValue();
    return <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Total Distance: ({basket?.length} Items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={1}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={""}
        
      />
        <button>Confirm Donations</button>

    </div>
}
export default Subtotal;