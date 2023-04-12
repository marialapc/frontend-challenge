import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import "../styles/App.scss";
import StatesList from "./StatesList";
import StateButton from "./StateButton";

function App() {
  const [names, setNames] = useState([]);
  const [hideList, setHideList] = useState("hidden");
  const [selectedState, setSelectedState] = useState("State");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setNames(data);
    });
  }, []);

  return (
    <>
      <StateButton
        hideList={hideList}
        setHideList={setHideList}
        selectedState={selectedState}
      />

      <StatesList
        names={names}
        hideList={hideList}
        setHideList={setHideList}
        setSelectedState={setSelectedState}
      />
    </>
  );
}

export default App;
