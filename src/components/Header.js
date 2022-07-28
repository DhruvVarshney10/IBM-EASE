import React from "react";
import "./Header.css";  
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import logo from "C:/Users/dhruv/Desktop/LilCoders/firstapp/src/images/headerlogo.png";
import donate from "C:/Users/dhruv/Desktop/LilCoders/firstapp/src/images/donate.jpg";
import {useStateValue} from "C:/Users/dhruv/Desktop/LilCoders/firstapp/src/StateProvider.js";

function Header(){
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="header">
                {/* <img className="header__logo" 
                     src="https://www.pngall.com/charity-donation-png"/> */}

            {/* <VolunteerActivismIcon className="header__logo2"/> */}
            <Link to="/">
            <img className="header__logo" src={logo} alt=""/>
            </Link>

            <Link to="/donor">
            <img className="header__logo2" src={donate} alt=""/>
           
            
            </Link>

            <div className="header__search">        
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            

            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Set</span>
                    <span className='header__optionLineTwo'>Location</span>
                </div>
            <div >

            <Link to="/login">
            <div className='header__option'>
                <span className='header__optionLineOne'>Account</span>  
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            </Link>

            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                     <ShoppingBasketIcon/>
                     <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
                   
            </div>
        </div>
    )
    
}

export default Header