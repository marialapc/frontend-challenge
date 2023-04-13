import "./StateInput.scss";

const StateInput = ({ selectedState, onInput }) => {

  return (
<input className="stateInput" type="text" placeholder={selectedState} onInput={onInput}/>
  );
};

export default StateInput;