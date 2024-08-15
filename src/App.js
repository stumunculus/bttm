import { useState, useEffect } from "react";
import "./App.css";

import { APP_MODES } from "./constants";
import NameInputPage from "./pages/NameInputPage";
import GameScreen from "./pages/NameInputPage";

function App() {
  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState(APP_MODES.playerNameInput);

  const isNameInputMode = gameState === APP_MODES.playerNameInput;

  const HARD_OUT = () => {
    localStorage.removeItem("players");
    setPlayers([]);
  };

  const stringOfPlayers = JSON.stringify({ players });
  useEffect(() => {
    localStorage.setItem("players", stringOfPlayers);
  }, [stringOfPlayers]);

  const startGame = () => setGameState(APP_MODES.game);
  const goToNameScreen = () => setGameState(APP_MODES.playerNameInput);
  const addNewPlayer = (name) => setPlayers([...players, name]);

  return (
    <div className="App">
      {isNameInputMode ? (
        <NameInputPage
          players={players}
          addNewPlayer={addNewPlayer}
          startGame={startGame}
        />
      ) : (
        <GameScreen endGame={goToNameScreen} />
      )}
      <button onClick={HARD_OUT}>HARD_OUT</button>
    </div>
  );
}

export default App;
