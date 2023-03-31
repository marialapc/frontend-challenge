import React, {useState, useEffect} from 'react';
import '../styles/App.scss'; 

function App() {
  const [names, setNames] = useState([]);

  useEffect(()=>{

    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
          const cleanData = data.results.map((character) => {
            return{
              id: character.id, 
              name: character.name,
            };
          });
          const sortedData = cleanData.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          });
          setNames(sortedData);
        });
    }, []);
    
  return (
    <body>
    <select defaultValue="">
      <option value="" disabled>State</option>
      {names.map((character) => (
        <option key={character.id}>{character.name}</option>
      ))}
    </select>
  </body>
);
}


export default App;