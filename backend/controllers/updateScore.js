const {
  gameState,
  resetGameState,
  getTennisScore,
} = require("../models/gameState");

const updateScore = (req, res) => {
  const { player } = req.body;

  if (!gameState[player]) {
    return res.json({ error: "invalid player" });
  }
  gameState[player].score += 1;

  const score1 = gameState.player1.score;
  const score2 = gameState.player2.score;

  const winningPoint = 4;

  // If one of the player reaches to 4 point first then that player will win
  if (score1 >= winningPoint || score2 >= winningPoint) {
    const scoreDifference = Math.abs(score1 - score2);
    // To win the opponent need to be at least 2 point behind
    if (scoreDifference >= 2) {
      gameState.status =
        score1 > score2
          ? `${gameState.player1.name} wins`
          : `${gameState.player2.name} wins`;

      return res.json({
        message: "Game Over",
        ...gameState,
        scoreTerm: getTennisScore(),
      });
    } else if (score1 === score2) {
      // If they both av equal score thans it's a deuce
      gameState.status = " Deuce";
    } else {
      // If neither of previouse statments are true then show wich player has the advantage.
      gameState.status =
        score1 > score2 ? "Advantage Player 1" : "Advantage Player 2";
    }
  }

  res.json({ ...gameState, scoreTerm: getTennisScore() });
};

module.exports = updateScore;
