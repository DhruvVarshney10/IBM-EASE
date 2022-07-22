import React, { useState } from 'react'
import './login.css'
function login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        //login authentication
    } 
    
    const register = e =>{
        e.preventDefault();
        //login authentication
    } 

  return (
    <div className = 'login'>
        <div className = 'login-container'>
            <h1> Sign in</h1>
            
                 <form>
                     <h5>E-mail</h5>
                     <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                     <h5>Password</h5>
                     <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                     <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                 </form>
            <p>
                By signing-in you agree to our application Policy. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick = {register}
            className = 'login_registerButton'>Create your "App-Name" account</button>

        </div>
    </div>
  )
}

export default login
 