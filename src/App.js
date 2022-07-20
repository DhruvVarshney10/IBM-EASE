import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./home.js";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    <Router>
      <div className="app">
          <Header/>
          <Home/>
      </div>
    </Router>
  );
} 

App();
export default App;
