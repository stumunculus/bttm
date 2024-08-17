export default function renderStrategy(strat) {
  return (
    <li>
      <div className="strat-container">
        <p>{strat.name}</p>
        <p>{strat.number}</p>
      </div>
    </li>
  );
}
