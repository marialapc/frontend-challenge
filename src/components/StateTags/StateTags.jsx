import "./StateTags.scss";

const StateTags = ({ stateTags = [] }) => {
  console.log(stateTags);
  if (stateTags.length === 1) {
    return null;
  }
  return (
    <div className="state-tags">
      {stateTags.map((state) => (
        <p className="tag" key={`state-tag-${state.id}`}>
          {state.name}
        </p>
      ))}
    </div>
  );
};

export default StateTags;
