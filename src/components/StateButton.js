import "../styles/StateButton.scss";

const StateButton = (props) => {
    const toggleHideList = (ev) => {
      if (props.hideList === "hidden") {
        props.setHideList("");
      } else {
        props.setHideList("hidden");
      }
    }
  return (
    <>
       <button className="stateButton" onClick={toggleHideList}>
       {props.selectedState} <p>⬇️</p>
      </button>
    </>
  );
};

export default StateButton;
