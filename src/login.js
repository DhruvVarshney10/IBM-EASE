import React, { useState } from 'react'
import './login.css'
import { Link } from "react-router-dom";
function login() {

  return (
    <div className = 'login'>
        <div className = 'login-container'>
            <h1> Sign in</h1>
            
                 <form>
                     <h5>E-mail</h5>
                     <input type='text' />

                     <h5>Password</h5>
                     <input type='password'/>
                    <Link to="/">
                     <button type='submit' className='login__signInButton'>Sign In</button>
                     </Link>
                 </form>
            <p>
                By signing-in you agree to our application Policy. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className = 'login_registerButton'>Create your "App-Name" account</button>

        </div>
    </div>
  )
}

export default login
 