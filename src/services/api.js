const getDataFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
          };
        });
        return cleanData.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        });
      });
  };
  
  export default getDataFromApi;
  