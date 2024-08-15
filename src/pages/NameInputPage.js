import { AddPlayer } from "../components/AddPlayer";

export default function NameInputPage({ players, addNewPlayer, startGame }) {
  return (
    <div>
      <AddPlayer addNewPlayer={addNewPlayer} />
      {players.join(", ")}
      <button onClick={startGame}>START GAME</button>
    </div>
  );
}
