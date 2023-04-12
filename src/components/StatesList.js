import "../styles/StateList.scss";

const StatesList = ( props ) => {

  return (
    <>
  <ul className={`stateList ${props.hideList}`} id="stateList">
        {props.names.map((state) => (
          <li
            className="stateList__element"
            key={state.id}
            value={state.id}
            onClick={() => {props.setSelectedState(state.name); props.setHideList('hidden')}}
          >
            {state.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatesList;
