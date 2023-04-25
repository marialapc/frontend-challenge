import React, { useState, useEffect } from "react";
import StateInput from "../StateInput/StateInput";
import StatesList from "../StateList/StatesList";
import StateButton from "../StateButton/StateButton";
import getStates from "../../services/getStates";
import StateTags from "../StateTags/StateTags";
import "./StateSearcher.scss";

const StateSearcher = () => {
  const [states, setStates] = useState([]);
  const [hideList, setHideList] = useState("hidden");
  const [selectedState, setSelectedState] = useState("");
  const [filteredStates, setFilteredStates] = useState("");
  const [stateTags, setStateTags] = useState([]);

  useEffect(() => {
    getStates().then((data) => {
      setStates(data);
    });
  }, []);

  const filteredList = states.filter((state) =>
    state.name.toLowerCase().startsWith(filteredStates.toLowerCase())
  );

  const onHideList = () => {
    setHideList(hideList === "hidden" ? "" : "hidden");
    setFilteredStates("");
  };

  const onSelectState = (state) => {
    setSelectedState(state.name);
    setHideList("hidden");
    setStateTags((oldStateTags) => [...oldStateTags, state]);
  };

  const handleFilter = (value) => {
    setFilteredStates(value);
  };

  const onFilter = (event) => {
    handleFilter(event.target.value);
    setHideList("");
    setSelectedState(onkeyup);
  };

  const onDeleteTag = (clickedState) => {
    const foundStateIndex = stateTags.findIndex((state) => state.id === clickedState.id);
    const newStateTags = stateTags.toSpliced(foundStateIndex, 1);
    setStateTags(newStateTags);
  };

  return (
    <div className="search-bar">
      <StateTags stateTags={stateTags} onClick={onDeleteTag} />
      <StateInput selectedState={selectedState} onInput={onFilter} />
      <StateButton onClick={onHideList} />
      <StatesList
        filteredList={filteredList}
        hideList={hideList}
        onClick={onSelectState}
      />
    </div>
  );
};

export default StateSearcher;
