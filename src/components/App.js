import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import "../styles/App.scss";
import "../styles/StateButton.scss";
import "../styles/StateList.scss";
// import StatesList from "./StatesList";
// import StateButton from "./StateButton";

function App() {
  const [names, setNames] = useState([]);
  const [hideList, setHideList] = useState("hidden");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setNames(data);
    });
  }, []);

  const toggleHideList = (ev) => {
    if (hideList === "hidden") {
      setHideList("");
    } else {
      setHideList("hidden");
    }
  };

  return (
    <>
       {/* <StateButton /> */}
      <button className="state-button" onClick={toggleHideList}>
        State
      </button>
      
      {/* <StatesList names={names} />  */}
      <ul className={`stateList ${hideList}`} id="state-list">
        {names.map((character) => (
          <li
            className="stateList__element"
            key={character.id}
            value={character.id}
          >
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
