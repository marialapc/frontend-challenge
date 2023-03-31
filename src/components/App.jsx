import React, {useState, useEffect} from 'react';

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
    <div>
      
      <ul>
        {names.map((character)=> (
<li key={character.id}>{character.name}</li>
        ))}

      </ul>
    </div>
  )};


export default App;