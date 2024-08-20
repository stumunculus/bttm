import { useState } from "react";
import { gamePhases } from "../constants";
import { STRATEGY_CARDS } from "../constants";
import StrategyPhasePage from "./StrategyPhasePage";
import ActionPhasePage from "./ActionPhasePage";

export default function GamePage({ players, endGame }) {
  const [phase, setPhase] = useState(gamePhases.strategy);
  const [gameState, setGameState] = useState(STRATEGY_CARDS);

  const changePhase = () => {
    setPhase(phase === "Strategy" ? gamePhases.action : gamePhases.strategy);
  };

  return (
    <div className="Game">
      {phase === "Strategy" ? (
        <StrategyPhasePage
          players={players}
          gameState={gameState}
          setGameState={setGameState}
        />
      ) : (
        <ActionPhasePage gameState={gameState} />
      )}

      <button onClick={changePhase}>Change Phase</button>

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
