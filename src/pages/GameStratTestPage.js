import { useState } from "react";
import { gamePhases } from "../constants";
import { STRATEGY_CARDS } from "../constants";

export default function GameStratTestPage({ endGame }) {
  const [phase, setPhase] = useState(gamePhases.strategy);
  const [allStrats, setAllStrats] = useState(STRATEGY_CARDS);
  function renderStrategy({ onClick, strat }) {
    return (
      <li onClick={onClick}>
        <div className="strat-container">
          <p>{strat.name}</p>
          <p>{strat.number}</p>
        </div>
      </li>
    );
  }

  return (
    <div className="Game">
      <div>
        <ul>{allStrats.map(renderStrategy)}</ul>
      </div>

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
