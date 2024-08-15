import { useState, useEffect } from "react";
import "./App.css";
import { AddPlayer } from "./components/AddPlayer";

function App() {
  const [players, setPlayers] = useState([]);

  const HARD_OUT = () => {
    localStorage.removeItem("players");
    setPlayers([]);
  };

  const stringOfPlayers = JSON.stringify({ players });
  useEffect(() => {
    localStorage.setItem("players", stringOfPlayers);
  }, [stringOfPlayers]);

  const addNewPlayer = (name) => setPlayers([...players, name]);

  return (
    <div className="App">
      <AddPlayer addNewPlayer={addNewPlayer} />
      {players.join(", ")}
      <button onClick={HARD_OUT}>HARD_OUT</button>
    </div>
  );
}

export default App;
