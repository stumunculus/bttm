import { useState, useEffect } from "react";
import "./App.css";

import { APP_MODES, gamePhases } from "./constants";
import NameInputPage from "./pages/NameInputPage";
import GamePage from "./pages/GamePage";
import { MIN_PLAYERS, MAX_PLAYERS } from "./constants";

function isGameStateValid(players) {
  return players.length >= MIN_PLAYERS && players.length <= MAX_PLAYERS;
}

function App() {
  const [players, setPlayers] = useState([]);
  const [appMode, setAppModes] = useState(APP_MODES.playerNameInput);
  const [phase, setPhase] = useState(gamePhases.strategy);

  const isNameInputMode = appMode === APP_MODES.playerNameInput;

  const startGame = () => setAppModes(APP_MODES.game);
  const goToNameScreen = () => setAppModes(APP_MODES.playerNameInput);
  const addNewPlayer = (name) => setPlayers([...players, name]);

  const HARD_OUT = () => {
    localStorage.removeItem("players");
    setPlayers([]);
    setAppModes(APP_MODES.playerNameInput);
    setPhase(gamePhases.strategy);
  };

  const gameStateIsValid = isGameStateValid(players);

  const appModeIsValid = isNameInputMode ? true : gameStateIsValid;

  useEffect(() => {
    if (!appModeIsValid) {
      HARD_OUT();
    }
  }, [appModeIsValid, appMode]);

  const stringOfPlayers = JSON.stringify({ players });
  useEffect(() => {
    localStorage.setItem("players", stringOfPlayers);
  }, [stringOfPlayers]);

  return (
    <div className="App">
      {isNameInputMode ? (
        <NameInputPage
          players={players}
          addNewPlayer={addNewPlayer}
          startGame={startGame}
        />
      ) : (
        <GamePage phase={phase} endGame={goToNameScreen} />
      )}
      <button onClick={HARD_OUT}>HARD OUT</button>
    </div>
  );
}

export default App;
