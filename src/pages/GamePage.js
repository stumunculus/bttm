import { useState } from "react";
import { gamePhases } from "../constants";

export default function GamePage({ endGame }) {
  const [phase, setPhase] = useState(gamePhases.strategy);

  return (
    <div>
      <h1>GAME</h1>

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
