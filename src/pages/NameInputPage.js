import { AddPlayer } from "../components/AddPlayer";
import { MIN_PLAYERS } from "../constants";

export default function NameInputPage({ players, addNewPlayer, startGame }) {
  return (
    <div>
      <AddPlayer addNewPlayer={addNewPlayer} />
      {players.join(", ")}
      <button disabled={players.length < MIN_PLAYERS} onClick={startGame}>
        START GAME
      </button>
    </div>
  );
}
