import React, {useState, useEffect} from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss'; 

function App() {
  const [names, setNames] = useState([]);

 useEffect(() => {
      getDataFromApi().then((data) => {
        setNames(data);
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