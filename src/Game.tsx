import React, { useState, useCallback } from "react";
import GameSetup from "./components/game-setup/GameSetup";
import { GameSettings } from "./types";
import GameBoard from "./components/game-board/GameBoard";
import { useStyles } from "./styles";

function Game(): JSX.Element {
  const classes = useStyles();
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);

  const handleEndGame = useCallback(() => setGameSettings(null), []);

  return (
    <div className={classes.root}>
      {gameSettings ? (
        <GameBoard gameSettings={gameSettings} onEndGame={handleEndGame} />
      ) : (
        <GameSetup onConfirmGameSettings={setGameSettings} />
      )}
    </div>
  );
}

export default Game;
