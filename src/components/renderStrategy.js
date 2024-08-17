export default function renderStrategy({ onClick, strat }) {
  return (
    <li onClick={onClick}>
      <div className="strat-container">
        <p>{strat.name}</p>
        <p>{strat.number}</p>
      </div>
    </li>
  );
}
