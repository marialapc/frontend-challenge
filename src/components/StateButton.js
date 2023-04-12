import "../styles/StateButton.scss";

const StateButton = () => {
    const toggleHideList = (ev) => {
      console.log('click')
    }
  return (
    <>
      <button className="state-button" onClick={toggleHideList}>
        State
      </button>
    </>
  );
};

export default StateButton;
