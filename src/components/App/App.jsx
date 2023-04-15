import React from "react";
import "../App/App.scss";
import StateSearcher from "../StateSearcher/StateSearcher";
import image from "../../assets/america.png"


function App() {
  return (
    <div className="main">
      <img src={image} alt="america" className="image" />
      <div className="container">
        <h1 className="title">Choose your state</h1>
        <StateSearcher />
      </div>
    </div>
  );
}

export default App;
