import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import "../styles/App.scss";
import "../styles/StateButton.scss";
import "../styles/StateList.scss";
// import StatesList from "./StatesList";
// import StateButton from "./StateButton";
import arrow from "../assets/arrowDown.png.png"

function App() {
  const [names, setNames] = useState([]);
  const [hideList, setHideList] = useState("hidden");
  const [selectedState, setSelectedState] = useState('State');

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
      <button className="stateButton" onClick={toggleHideList}>
       {selectedState} <p>⬇️</p>
      </button>
   
      
      {/* <StatesList names={names} />  */}
      <ul className={`stateList ${hideList}`} id="stateList">
        {names.map((character) => (
          <li
            className="stateList__element"
            key={character.id}
            value={character.id}
            onClick={() => {setSelectedState(character.name); setHideList('hidden')}}
          >
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
