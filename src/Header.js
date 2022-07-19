import React from "react";
import "./Header.css";  
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header(){
    return(
        <div className="header">
                {/* <img className="header__logo" 
                     src="https://www.pngall.com/charity-donation-png"/> */}

            <VolunteerActivismIcon className="header__logo2"/>

            <div className="header__search">        
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">

                <div className='header__option'>
                    <span className='header__optionLineOne'>Set</span>
                    <span className='header__optionLineTwo'>Location</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Account</span>  
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className="header__optionBasket">
                     <ShoppingBasketIcon/>
                     <span className="header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>
    </div>
    )
    
}

export default Header