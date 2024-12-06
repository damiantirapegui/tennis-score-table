import { useEffect, useState } from "react";
import "./App.css";
import { addPoint, fetchGameState, resetGame } from "./utils/game";

function App() {
  const [gameState, setGameState] = useState(null);
  const [listner, setListner] = useState(false);

  fetchGameState();

  useEffect(() => {
    (async () => {
      const result = await fetchGameState();
      setGameState(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await fetchGameState();
      setGameState(result);
    })();
  }, [listner]);

  const HandleAddPoint = async (player) => {
    await addPoint(player);
    setListner((e) => !e);
  };

  const handleResetGame = async () => {
    const result = await resetGame();
    setGameState(result);
  };

  if (!gameState) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="tennis-score-table-container">
        <div className="reset-game-container">
          <button className="--button" onClick={handleResetGame}>
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
            onClick={() => HandleAddPoint("player1")}
            disabled={gameState.status.includes("wins")}
          >
            Add Point
          </button>
          <button
            className="--button"
            onClick={() => HandleAddPoint("player2")}
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
