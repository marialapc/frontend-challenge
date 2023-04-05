import "../styles/App.scss";
const StatesList = ({ names }) => {
  return (

     
    <ul className="list">
        State
      {names.map((character) => (
        <li key={character.id} value={character.id}>
          {character.name}
        </li>
      ))}
    </ul>
  );
};

export default StatesList;
