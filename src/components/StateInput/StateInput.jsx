import "./StateInput.scss";

const StateInput = ({ selectedState, onInput }) => {
  return (
    <input
      className="stateInput"
      type="text"
      placeholder="State"
      onInput={onInput}
      value={selectedState}
    />
  );
};

export default StateInput;
