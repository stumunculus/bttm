import { useState } from "react";
import { gamePhases } from "../constants";
import { STRATEGY_CARDS } from "../constants";
import StrategyPhasePage from "./StrategyPhasePage";
import renderStrategy from "../components/renderStrategy";

export default function GamePage({ endGame }) {
  const [phase, setPhase] = useState(gamePhases.strategy);
  const [allStrats, setAllStrats] = useState(STRATEGY_CARDS);

  return (
    <div className="Game">
      <StrategyPhasePage
        strategies={STRATEGY_CARDS}
        renderStrategy={renderStrategy}
      />

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
