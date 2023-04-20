import "./StateTags.scss";

const StateTags = ({ stateTags = [], onClick}) => {
  if (stateTags.length === 1) {
    return null;
  }
  return (
    <div  className="state-tags">
      {stateTags.map((state) => (
        <div className="state-tags_tag" key={`state-tag-${state.id}`}>
        <p >
          {state.name }
        </p>
        <button className="state-tags_button" onClick={onClick}>x</button>
        </div>
      ))}
    </div>
  );
};


export default StateTags;
