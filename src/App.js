import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./home.js";


function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
} 

App();
export default App;
