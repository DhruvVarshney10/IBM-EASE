import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./home.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./login";
import Donor from "./donor";

//import { Switch } from "@mui/material";


function App() {
  return (
    <Router>
      <div className="app">    
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/donor" element={<Donor/>}/>


          </Routes>
      </div>
    </Router>
  );
} 

App();
export default App;


// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', (req, res) => {
//     res.render('home')
// })


// app.get('/login', (req, res) => {
//     res.render('login')
// })

// app.listen(5000, () => {
//     console.log("LISTENING ON PORT 3000")
// })