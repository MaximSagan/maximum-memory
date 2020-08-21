import React, { useState } from "react";
import GameSetup from "./components/game-setup/GameSetup";
import { GameSettings } from "./types";
import GameBoard from "./components/game-board/GameBoard";
import { useStyles } from "./styles";

function App(): JSX.Element {
  const classes = useStyles();
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);

  return (
    <div className={classes.root}>
      {gameSettings ? (
        <GameBoard gameSettings={gameSettings} />
      ) : (
          <GameSetup onConfirmGameSettings={setGameSettings} />
        )}
    </div>
  );
}

export default App;
