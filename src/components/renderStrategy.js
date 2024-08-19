export const RenderStrategy = ({ gameState, handleClick }) => {
  return gameState.map((strat) => {
    return (
      <div key={strat.number} className="strat-container">
        <p>{strat.name}</p>
        <p>Number {strat.number}</p>
        <p>Player: {strat.player}</p>
        <button onClick={() => handleClick(strat.number)}>Select</button>
      </div>
    );
  });
};
