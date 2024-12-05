const { gameState, resetGameState } = require("../models/gameState");

const resetGame = (req, res) => {
  resetGameState();
  res.json({ message: "The game has been reset", gameState });
};

module.exports = resetGame;
