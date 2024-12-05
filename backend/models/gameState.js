// Score table
let gameState = {
  player1: { name: "player1", score: 0 },
  player2: { name: "player2", score: 0 },
  status: "ongoing",
};

// Reset game from /reset endpoint
const resetGameState = () => {
  gameState.player1.score = 0;
  gameState.player2.score = 0;
  gameState.status = "ongoing";
  console.log("Reset successfully");
};

module.exports = { gameState, resetGameState };
