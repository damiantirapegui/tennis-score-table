const express = require("express");
const getGameState = require("../controllers/getGameState");
const updateScore = require("../controllers/updateScore");
const resetGame = require("../controllers/resetGameState");

const router = express.Router();

router.get("/game", getGameState);
router.post("/score", updateScore);
router.post("/reset", resetGame);

module.exports = router;
