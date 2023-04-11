import "../styles/StateButton.scss";

const StateButton = () => {

   const hideList = (event) =>{
    event.preventDefault()
   }

    return (
    <button className="state-button" onClick={hideList}>State</button>
    );   
}

export default StateButton;