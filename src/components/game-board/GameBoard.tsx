import React, { useState, useMemo } from "react";
import { GameSettings, GameCardStatus } from "../../types";
import ImageCard from "../image-card/ImageCard";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";
import { Subject, concat, interval, timer } from "rxjs";
import { take, delay, map, share, ignoreElements } from "rxjs/operators";
import {
  useSubscription,
  useObservable,
  useObservableState,
} from "observable-hooks";
import { generateNumericArray, shuffleArray } from "../../helpers";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FLIP_TIME, NUMBER_OF_IMAGES_IN_CARD_THEME } from "../../constants";
import Button from "@material-ui/core/Button";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Typography from "@material-ui/core/Typography";
import GameCompleteDialog from "../game-complete-dialog/GameCompleteDialog";
import classNames from "classnames";

interface Props {
  gameSettings: GameSettings;
  onEndGame: () => void;
}

const ALL_CARDS_VISIBLE_DURATION_SEC = 3;

export default React.memo(function GameBoard({
  gameSettings,
  onEndGame,
}: Props): JSX.Element {
  const { numberOfCards, cardTheme } = gameSettings;
  const classes = useStyles({ numberOfCards });
  const [gameCards, setGameCards] = useState(() =>
    initializeGameCards(numberOfCards)
  ); // Note: Using "lazy initial state" to avoid repeating randomizing logic on each render
  const [isFlipAllowed, setIsFlipAllowed] = useState(false);
  const [numberOfMisses, setNumberOfMisses] = useState(0);

  // Hide cards after timeout, staggered in a randomized order
  const randomizedHideOrder = useMemo(
    () => shuffleArray(generateNumericArray(numberOfCards)),
    [numberOfCards] // numberOfCards does not change so this will not re-calculate
  );
  const countDown$ = useObservable(() =>
    interval(1000).pipe(
      take(ALL_CARDS_VISIBLE_DURATION_SEC),
      map((intervalIndex) => ALL_CARDS_VISIBLE_DURATION_SEC - intervalIndex - 1),
      share()
    )
  );
  const secondsUntilHideCards = useObservableState(countDown$, ALL_CARDS_VISIBLE_DURATION_SEC);
  console.log({ secondsUntilHideCards });
  const hideAllCards$ = useObservable(() =>
    concat(
      // Start hiding cards after the countdown finishes
      countDown$.pipe(ignoreElements()),
      timer(0, 50).pipe(take(numberOfCards))
    )
  );
  useSubscription(
    hideAllCards$,
    (intervalIndex) => {
      const indexToFlip = randomizedHideOrder[intervalIndex];
      setGameCards((cards) =>
        cards.map((card, index) =>
          index === indexToFlip ? { ...card, isFaceUp: false } : card
        )
      );
    },
    null,
    () => setIsFlipAllowed(true)
  );

  // Display match result after short delay (e.g. so we don't turn cards back face down before the user has a chance to see that they don't match).
  const notifyMatchResult$ = useMemo(
    () => new Subject<{ isMatch: boolean; indices: [number, number] }>(),
    []
  );
  const notifyMatchResultDelayed$ = useObservable(() =>
    notifyMatchResult$.pipe(delay(FLIP_TIME))
  );
  useSubscription(notifyMatchResultDelayed$, ({ isMatch, indices }) => {
    setIsFlipAllowed(true);
    if (isMatch) {
      // Set two cards as matched
      setGameCards((cards) =>
        cards.map((card, cardIndex) =>
          indices.includes(cardIndex)
            ? { ...card, isMatched: true, isActive: false }
            : card
        )
      );
    } else {
      // Set face down
      setGameCards((cards) =>
        cards.map((card, cardIndex) =>
          indices.includes(cardIndex)
            ? { ...card, isFaceUp: false, isActive: false }
            : card
        )
      );
      setNumberOfMisses((misses) => misses + 1);
    }
  });

  const handleGameCardClick = (clickedCardIndex: number) => {
    const clickedCard = gameCards[clickedCardIndex];
    if (!isFlipAllowed || clickedCard.isFaceUp) {
      return;
    }
    setGameCards(
      gameCards.map((card, index) =>
        clickedCardIndex === index
          ? { ...card, isFaceUp: true, isActive: true }
          : card
      )
    );
    const unmatchedFaceUpCard = gameCards.find(
      ({ isFaceUp, isMatched }) => isFaceUp && !isMatched
    );
    if (unmatchedFaceUpCard) {
      const isMatch = clickedCard.imageId === unmatchedFaceUpCard.imageId;
      notifyMatchResult$.next({
        isMatch,
        indices: [clickedCardIndex, unmatchedFaceUpCard.displayIndex],
      });
      setIsFlipAllowed(false); // Disable flipping of next card until result of this flip has been notified
    }
  };

  const percentageProgress =
    (gameCards.filter(({ isMatched }) => isMatched).length / numberOfCards) *
    100;

  return (
    <Card className={classes.root}>
      <div className={classes.gameInfo}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<CancelPresentationIcon />}
          onClick={onEndGame}
        >
          End game
        </Button>
        {numberOfMisses > 0 ? (
          <Typography>Misses: {numberOfMisses}</Typography>
        ) : (
            <Typography
              className={classNames(
                classes.hideCardsCountdown,
                secondsUntilHideCards === 0 && classes.hideCardsCountdownFinished
              )}
            >
              Flipping in {secondsUntilHideCards}...
            </Typography>
          )}
      </div>
      <div className={classes.gameCards}>
        {gameCards.map((gameCard, cardIndex) => (
          <ImageCard
            className={classes.imageCard}
            src={`images/${cardTheme.id}/${gameCard.imageId}.png`}
            alt="Card"
            isFaceUp={gameCard.isFaceUp}
            isMatched={gameCard.isMatched}
            isActive={gameCard.isActive}
            onClick={() => handleGameCardClick(cardIndex)} // TODO: // Use memoized handler
          />
        ))}
      </div>
      <LinearProgress
        className={classes.progress}
        variant="determinate"
        value={percentageProgress}
      />
      {percentageProgress === 100 && (
        <GameCompleteDialog
          numberOfCards={numberOfCards}
          numberOfMisses={numberOfMisses}
          onConfirm={onEndGame}
        />
      )}
    </Card>
  );
});

function initializeGameCards(numberOfCards: number): GameCardStatus[] {
  // Randomly pick which card images will be shown
  const imageIndices = shuffleArray(
    generateNumericArray(NUMBER_OF_IMAGES_IN_CARD_THEME)
  ).slice(0, numberOfCards / 2);
  // Shuffle two sets of the images to into their display order
  return shuffleArray([...imageIndices, ...imageIndices]).map(
    (imageId, displayIndex) => ({
      displayIndex,
      imageId,
      isFaceUp: true,
      isMatched: false,
      isActive: false,
    })
  );
}
