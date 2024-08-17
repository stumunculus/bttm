import { useState } from "react";
import { AdvancePlayer } from "../components/AdvancePlayer";

export default function StrategyPhasePage({
  players,
  gameState,
  renderStrategy,
}) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const nextPlayer = (e) => {
    e.preventDefault();
    setCurrentPlayer(
      currentPlayer + 1 < players.length ? currentPlayer + 1 : 0
    );
  };

  return (
    <>
      <div>
        <h1>Current Player: {players[currentPlayer]}</h1>
      </div>
      <button onClick={nextPlayer}>Next Player</button>
      <div>
        <ul>{gameState.map(renderStrategy)}</ul>
      </div>
    </>
  );
}
