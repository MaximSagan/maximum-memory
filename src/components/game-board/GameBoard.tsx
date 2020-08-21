import React, { useState, useCallback } from "react";
import { GameSettings, CARD_THEMES, ImageCardState } from "../../types";
import { Card } from "@material-ui/core";
import ImageCard from "../image-card/ImageCard";
import { useStyles } from "./styles";

interface Props {
  gameSettings: GameSettings;
}

export default React.memo(function GameBoard({
  gameSettings,
}: Props): JSX.Element {
  const classes = useStyles();
  const [imageCards, setImageCards] = useState(initializeImageCards(gameSettings.numberOfCards)); // Note: It is clear here that updating number of cards will not update state, but this is permissable as we do not want to change this setting mid-game
  return <Card className={classes.root}>
    {imageCards.map(imageCard => (<ImageCard
      src={`/images/${gameSettings.cardTheme.id}/${imageCard.imageId}.png`}
      alt="Card"
    />))}
  </Card>;
});


function initializeImageCards(numberOfCards: number): ImageCardState[] {
  const imageIndices = Array.from({ length: numberOfCards / 2 }, (_, k) => k);
  return shuffleArray([...imageIndices, ...imageIndices]).map(imageId => ({ imageId, isFlipped: false }));
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}