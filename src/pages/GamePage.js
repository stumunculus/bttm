export function GameScreen({ endGame }) {
  return (
    <div>
      <h1>GAME</h1>

      <button onClick={endGame}>END GAME</button>
    </div>
  );
}
