// Score table
const gameState = {
  player1: { name: "player1", score: 0 },
  player2: { name: "player2", score: 0 },
  status: "ongoing",
};

// Create a function that converts the score numbers to tennis terms i string.
const scoreTennisTerm = (score) => {
  const scoreTerm = ["Love", "Fifteen", "Thirty", "Forty", "Game"];
  return scoreTerm[score] || ""; //score will me the callback from the score. Number of score will represent the index of the scoreTerm;
};

// Convert object from gamestate to new object that converts the points and add the terms.
const getTennisScore = () => {
  return {
    player1: scoreTennisTerm(gameState.player1.score),
    player2: scoreTennisTerm(gameState.player2.score),
  };
};

// Reset game from /reset endpoint
const resetGameState = () => {
  gameState.player1.score = 0;
  gameState.player2.score = 0;

  gameState.status = "ongoing";
  console.log("Reset successfully");
};

module.exports = { gameState, resetGameState, getTennisScore };
