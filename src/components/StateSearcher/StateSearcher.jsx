import React, { useState, useEffect } from "react";
import StateInput from "../StateInput/StateInput"
import StatesList from "../StateList/StatesList";
import StateButton from "../StateButton/StateButton";
import getStates from "../../services/getStates";
import "./StateSearcher.scss"


const StateSearcher = () => {
  const [states, setStates] = useState([]);
  const [hideList, setHideList] = useState("hidden");
  const [selectedState, setSelectedState] = useState("State");

  useEffect(() => {
    getStates().then((data) => {
      setStates(data);
    });
  }, []);

  const onHideList = () => {
    setHideList(hideList === "hidden" ? "" : "hidden");
  };

  const onSelectState = (state) => {
    setSelectedState(state.name);
    setHideList("hidden");
  };

  return (
    <>
    <div className="searchBar">
      <StateInput selectedState={selectedState} />
      <StateButton onClick={onHideList} />
    </div>
   <StatesList states={states} hideList={hideList} onClick={onSelectState} />
    </>
  );
};

export default StateSearcher;
