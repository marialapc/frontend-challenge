import "../styles/StateList.scss";

const StatesList = ({ names }) => {

 let hideList = 'hidden';

  return (
    <>
      <ul className={`stateList ${hideList}` }  id="stateList" >
        {names.map((character) => (
          <li className="stateList__element" key={character.id} value={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatesList;
