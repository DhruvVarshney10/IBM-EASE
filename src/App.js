import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./home.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
//import { Switch } from "@mui/material";


function App() {
  return (
    <Router>
      <div className="app">    
      <Header/>
      <Home/>
          {/* <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
          </Router> */}
            
          
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