import React, {useState, useEffect} from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss'; 
import StatesList from './StatesList';

function App() {
  const [names, setNames] = useState([]);

 useEffect(() => {
      getDataFromApi().then((data) => {
        setNames(data);
      });
    }, []);

  return (

      <StatesList names={names} />

);
}


export default App;