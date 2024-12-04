const { gameState } = require("../models/gameState");

const getGameState = (req, res) => {
  res.json(gameState);
};

module.exports = getGameState;
