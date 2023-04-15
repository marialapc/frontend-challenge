import "./StateTags.scss";

const StateTags = ({selectedState}) => {
    return (
      <div className="state-tags" >
        <div className="tag">
            <p>{selectedState}</p></div>
      </div>
    );
  };
  
  export default StateTags;
  