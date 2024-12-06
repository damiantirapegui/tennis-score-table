import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

//Get latest gamestate change
export const fetchGameState = async () => {
  try {
    const response = await axios.get(`${URL}api/game`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game state:", error.message);
  }
};

// This function send the scores to gamestate
export const addPoint = async (player) => {
  try {
    const response = await axios.post(`${URL}api/score`, { player });
    return response.data;
  } catch (error) {
    console.error("Error updating score: ", error);
  }
};

// Restarts the game
export const resetGame = async () => {
  try {
    const response = await axios.post(`${URL}api/reset`);
    return response.data.gameState;
  } catch (error) {
    console.error("Error resetting game", error);
  }
};
