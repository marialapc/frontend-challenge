import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import "../styles/App.scss";
import StatesList from "./StatesList";
import StateButton from "./StateButton";

function App() {
  const [names, setNames] = useState([]);
  
  useEffect(() => {
    getDataFromApi().then((data) => {
      setNames(data);
    });
  }, []);

  return (
    <>
  <StateButton  />
 <StatesList names={names} />
 </>

);}

export default App;
