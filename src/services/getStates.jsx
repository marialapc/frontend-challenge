const cleanData = (states) => {
  return states.map((state) => ({
    id: state.id,
    name: state.name,
  }));
}

const sortData = (states) => {
  return states.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
}

const getStates = () => {
  return import("../data/states.json")
  .then(({ states }) => {
    const cleanStates = cleanData(states);
    const sortedStates = sortData(cleanStates);
    return sortedStates;
  })
  .catch( (error) => {
   console.error(error)
  })
};

export default getStates;
