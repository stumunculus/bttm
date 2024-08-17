export const STRATEGY_CARDS = [
  {
    number: 1,
    name: "Leadership",
    color: "red",
  },
  {
    number: 2,
    name: "Diplomacy",
    color: "orange",
  },
  {
    number: 3,
    name: "Politics",
    color: "yellow",
  },
  {
    number: 4,
    name: "Construction",
    color: "green",
  },
  {
    number: 5,
    name: "Trade",
    color: "aqua",
  },
  {
    number: 6,
    name: "Warfare",
    color: "blue",
  },
  {
    number: 7,
    name: "Technology",
    color: "navy",
  },
  {
    number: 8,
    name: "Imperial",
    color: "purple",
  },
];

export const APP_MODES = {
  playerNameInput: "PLAYER_NAME_INPUT",
  game: "GAME_MODE",
};

export const gamePhases = {
  strategy: "strategy",
  action: "action",
  status: "status",
  agenda: "agenda",
};

export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 8;
export const numOfStrats = (players) =>
  STRATEGY_CARDS.length - (STRATEGY_CARDS.length % players);
