import "./StateTags.scss";

const StateTags = ({ stateTags = [] }) => {
  console.log(stateTags);
  if (stateTags.length === 1) {
    return null;
  }
  return (
    <div className="state-tags">
      {stateTags.map((state) => (
        <div className="state-tags_tag">
        <p  key={`state-tag-${state.id}`}>
          {state.name }
        </p>
        <button className="state-tags_button">x</button>
        </div>
      ))}
    </div>
  );
};


export default StateTags;
