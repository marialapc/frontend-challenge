import "./StateInput.scss";

const StateInput = ({ selectedState, onClick }) => {

  return (
<input className="stateInput" type="text" placeholder={selectedState}  onClick={onClick} />
  );
};

export default StateInput;