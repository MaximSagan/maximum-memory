import React, { useState, useCallback } from "react";
import GameSetup from "./components/game-setup/GameSetup";
import { GameSettings } from "./types";
import GameBoard from "./components/game-board/GameBoard";
import { useStyles } from "./styles";

function Game(): JSX.Element {
  const classes = useStyles();
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>(undefined);
  const [isGameActive, setIsGameActive] = useState(false);

  const handleStartGame = useCallback((settings: GameSettings) => {
    setGameSettings(settings);
    setIsGameActive(true);
  }, []);
  const handleEndGame = useCallback(() => setIsGameActive(false), []);

  return (
    <div className={classes.root}>
      {isGameActive ? (
        <GameBoard gameSettings={gameSettings!} onEndGame={handleEndGame} />
      ) : (
          <GameSetup onConfirmGameSettings={handleStartGame} previousSettings={gameSettings} />
        )}
    </div>
  );
}

export default Game;
