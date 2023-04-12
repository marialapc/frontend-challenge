//  '../data/states.json'

const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const cleanData = data.results.map((state) => {
        return {
          id: state.id,
          name: state.name,
        };
      });
      return cleanData.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    });
};

export default getDataFromApi;
