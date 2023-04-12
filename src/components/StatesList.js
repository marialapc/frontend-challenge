import "../styles/StateList.scss";

const StatesList = ({ names }) => {

  const hideList = 'hidden';

  return (
    <>
      <ul className={`state-list ${hideList}` }  id="state-list" >
        {names.map((character) => (
          <li className="list__element" key={character.id} value={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatesList;
