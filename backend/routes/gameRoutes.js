const express = require("express");
const getGameState = require("../controllers/getGameState");

const router = express.Router();

router.get("/game", getGameState);
