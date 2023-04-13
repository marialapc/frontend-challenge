import "./StateInput.scss";

const StateInput = ({ selectedState }) => {

  return (
<input className="stateInput" type="text" placeholder={selectedState} />
  );
};

export default StateInput;