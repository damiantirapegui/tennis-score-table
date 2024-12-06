const {
  gameState,
  resetGameState,
  getTennisScore,
} = require("../utils/gameState");

const resetGame = (req, res) => {
  resetGameState();

  const tennisScore = getTennisScore();
  res.json({
    message: "The game has been reset",
    gameState: {
      player1: {
        name: gameState.player1.name,
        score: gameState.player1.score,
        scoreTerm: tennisScore.player1,
      },
      player2: {
        name: gameState.player2.name,
        score: gameState.player2.score,
        scoreTerm: tennisScore.player2,
      },
      status: gameState.status,
    },
  });
};

module.exports = resetGame;
