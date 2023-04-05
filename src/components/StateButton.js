import "../styles/StateButton.scss";

const StateButton = () => {

   const handleClick = (event) =>{
    event.preventDefault()
   }

    return (
    <button className="state-button" onClick={handleClick}>State</button>
    );   
}

export default StateButton;