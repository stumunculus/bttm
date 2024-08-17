export const AdvancePlayer = (players, index) => {
  return index < players.length ? index + 1 : 0;
};
