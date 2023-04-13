import "./StateButton.scss";

const StateButton = ({ onClick }) => {
  return (
    <button className="stateButton" onClick={onClick}>
      <p>⬇️</p>
    </button>
  );
};

export default StateButton;
