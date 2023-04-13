import "./StateButton.scss";

const StateButton = ({ selectedState, onClick }) => {

  return (
    <button
      className="stateButton"
      onClick={onClick}
    >
      { selectedState } <p>⬇️</p>
    </button>
  );
};

export default StateButton;
