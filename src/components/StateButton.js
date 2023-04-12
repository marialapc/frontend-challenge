import "../styles/StateButton.scss";

const StateButton = (props) => {
  
  const toggleHideList = (ev) => {
    props.setHideList(props.hideList === "hidden" ? "" : "hidden");
  };

  return (
    <>
      <button className="stateButton" onClick={toggleHideList}>
        {props.selectedState} <p>⬇️</p>
      </button>
    </>
  );
};

export default StateButton;
