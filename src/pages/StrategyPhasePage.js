import { useState } from "react";
import { STRATEGY_CARDS } from "../constants";

export default function StrategyPhasePage() {
  const [availStratCards, setAvailStratCards] = useState(STRATEGY_CARDS);
  const renderStrategy = (strat) => {
    <li>
      <div className="strat-container">
        <p>{strat.name}</p>
        <p>{strat.number}</p>
      </div>
    </li>;
  };

  return (
    <div>
      <ul>{availStratCards.map(renderStrategy)}</ul>
    </div>
  );
}
