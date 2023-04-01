const StatesList = ({names}) => {
  
    return (
        <select defaultValue="">
         <option value="" disabled>State</option>
         {names.map((character) => (
          <option key={character.id} value={character.id}>{character.name}</option>
       ))}
      </select>
    
    );
         };

export default StatesList;