import { useState } from "react";

export default function ActionPhasePage({ gameState }) {
  const [turn, setTurn] = useState(0);

  const nextTurn = () => {
    setTurn(turn + 1 < gameState.length ? turn + 1 : 0);
  };

  const prevTurn = () => {
    setTurn(turn > 0 ? turn - 1 : gameState.length - 1);
  };

  return (
    <div className="currentTurn-container">
      <h1>Player: {gameState[turn].player}</h1>
      <h2>Turn {gameState[turn].number}</h2>
      <p>{gameState[turn].name}</p>
      <button onClick={() => prevTurn(gameState[turn].number)}>
        Previous Turn
      </button>
      <button onClick={() => nextTurn(gameState[turn].number)}>
        Next Turn
      </button>
    </div>
  );
}
