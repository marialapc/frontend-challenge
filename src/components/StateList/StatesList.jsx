import "./StateList.scss";

const StatesList = ({ states, hideList, onClick }) => {
  return (
    <ul id="stateList"
      className={`stateList ${hideList}`}
    >
      { states.map((state) => (
        <li
          className="stateList__element"
          key={state.id}
          value={state.id}
          onClick={() => onClick(state)}
        >
          { state.name }
        </li>
      ))}
    </ul>
  );
};

export default StatesList;
