const express = require("express");
const cors = require("cors");
const getGameState = require("./controllers/getGameState");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", getGameState);

module.exports = app;
