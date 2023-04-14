import "./StateButton.scss";

const StateButton = ({ onClick }) => {
  return (
    <button className="state-button" onClick={onClick}>
      <p>⬇️</p>
    </button>
  );
};

export default StateButton;
