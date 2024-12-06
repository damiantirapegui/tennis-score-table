import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

function App() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await axios.get(`${URL}api/game`);
        setGameState(response.data);
      } catch (error) {
        console.error("Error fetching game state:", error.message);
      }
    };
    fetchGameState();
  }, []);

  const addPoint = async (player) => {
    try {
      const response = await axios.post(`${URL}api/score`, { player });
      setGameState(response.data);
    } catch (error) {
      console.error("Error updating score: ", error);
    }
  };

  if (!gameState) {
    return <div>Loading...</div>;
  }

  const resetGame = async () => {
    try {
      const response = await axios.post(`${URL}api/reset`);
      setGameState(response.data.gameState);
    } catch (error) {
      console.error("Error resetting game", error);
    }
  };
  return (
    <>
      <div className="tennis-score-table-container">
        <div className="reset-game-container">
          <button className="--button" onClick={resetGame}>
            RESET GAME
          </button>
        </div>
        <div className="winner-container">
          {gameState.status.includes("wins") ? (
            <h1 className="winner">{gameState.status.toUpperCase()}</h1>
          ) : (
            <h1 className="winner">{gameState.status.toUpperCase()}</h1>
          )}
        </div>
        <div className="score-container">
          {["player1", "player2"].map((player) => (
            <div className="player" key={player}>
              <h1>{gameState[player].name}</h1>
              <div className="score-box">
                <h2>{gameState[player].score}</h2>
                <h2>{gameState[player].scoreTerm}</h2>
              </div>

              {gameState.status.includes("Advantage") &&
                gameState.status.includes(gameState[player].name) && (
                  <div className="advantage-container">
                    <h2 className="advantage"> ADVANTAGE</h2>
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="play-button-container">
          <button
            className="--button"
            onClick={() => addPoint("player1")}
            disabled={gameState.status.includes("wins")}
          >
            Add Point
          </button>
          <button
            className="--button"
            onClick={() => addPoint("player2")}
            disabled={gameState.status.includes("wins")}
          >
            Add Point
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
