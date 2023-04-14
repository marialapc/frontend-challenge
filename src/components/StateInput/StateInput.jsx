import "./StateInput.scss";

const StateInput = ({ selectedState, onInput }) => {
  return (
    <input
      className="state-input"
      type="text"
      placeholder="State"
      onInput={onInput}
      value={selectedState}
    />
  );
};

export default StateInput;
