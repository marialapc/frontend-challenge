import "./StateList.scss";

const StatesList = ({ filteredList, hideList, onClick }) => {
  return (
    <ul id="stateList"
      className={`stateList ${hideList}`}
    >
      { filteredList.map((state) => (
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
