import { useState } from "react";
import { gamePhases } from "../constants";
import { STRATEGY_CARDS } from "../constants";
import StrategyPhasePage from "./StrategyPhasePage";
import renderStrategy from "../components/renderStrategy";

export default function GamePage({ players, endGame }) {
  const [phase, setPhase] = useState(gamePhases.strategy);
  const [gameState, setGameState] = useState(STRATEGY_CARDS);

  return (
    <div className="Game">
      <StrategyPhasePage
        players={players}
        gameState={gameState}
        renderStrategy={renderStrategy}
      />

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
