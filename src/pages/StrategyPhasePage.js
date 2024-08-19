import { useState } from "react";
import { RenderStrategy } from "../components/renderStrategy";

export default function StrategyPhasePage({
  players,
  gameState,
  setGameState,
}) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const nextPlayer = (e) => {
    e.preventDefault();
    setCurrentPlayer(
      currentPlayer + 1 < players.length ? currentPlayer + 1 : 0
    );
  };

  const pickStrat = (stratNumber) => {
    setGameState(
      gameState.map((strat) =>
        strat.number === stratNumber
          ? { ...strat, player: players[currentPlayer] }
          : strat
      )
    );
  };

  return (
    <>
      <div>
        <h1>Current Player: {players[currentPlayer]}</h1>
      </div>
      <button onClick={nextPlayer}>Next Player</button>
      <div>
        <RenderStrategy gameState={gameState} handleClick={pickStrat} />
      </div>
    </>
  );
}
