const express = require("express");
const cors = require("cors"); // Importing cors so that backend and frontend can communicate with eachother
const gameRoutes = require("./routes/gameRoutes"); // All routes stored in here.

const app = express(); // Express, a modern tool for managing and building API:s

app.use(cors()); // Activating Cors
app.use(express.json());

app.use("/api", gameRoutes);

module.exports = app;
