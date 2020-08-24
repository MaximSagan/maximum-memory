import React, { useState, useCallback, useRef } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { GameSettings } from "../../types";
import { useStyles } from "./styles";
import ImageCard from "../image-card/ImageCard";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Card from "@material-ui/core/Card";
import {
  DEFAULT_NUMBER_OF_CARDS,
  MINIMUM_NUMBER_OF_CARDS,
  MAXIMUM_NUMBER_OF_CARDS,
  DEFAULT_CARD_THEME_ID,
  CARD_THEMES,
  NUMBER_OF_IMAGES_IN_CARD_THEME,
} from "../../constants";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

interface Props {
  previousSettings?: Partial<GameSettings>;
  onConfirmGameSettings: (settings: GameSettings) => void;
}

export default React.memo(function Settings({
  previousSettings,
  onConfirmGameSettings,
}: Props): JSX.Element {
  const classes = useStyles();
  const randomImageId = useRef(
    Math.floor(Math.random() * NUMBER_OF_IMAGES_IN_CARD_THEME)
  );

  const [cardThemeId, setCardThemeId] = useState(
    previousSettings?.cardTheme?.id ?? DEFAULT_CARD_THEME_ID
  );
  const [numberOfCards, setNumberOfCards] = useState(
    previousSettings?.numberOfCards ?? DEFAULT_NUMBER_OF_CARDS
  );

  const handleThemeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setCardThemeId(value);
    },
    [setCardThemeId]
  );
  const handleNumberOfCardsChange = useCallback(
    (event: React.ChangeEvent<{}>, value: number | number[]) => {
      setNumberOfCards(value as number);
    },
    [setNumberOfCards]
  );
  const handleConfirmButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onConfirmGameSettings({
        cardTheme: CARD_THEMES.find(({ id }) => id === cardThemeId)!,
        numberOfCards,
      });
    },
    [onConfirmGameSettings, cardThemeId, numberOfCards]
  );
  return (
    <Card className={classes.root} component="form">
      <Typography variant="h4" className={classes.title}>
        Game setup
      </Typography>

      <Typography id="number-of-cards-slider" className={classes.label}>
        Number of cards
      </Typography>
      <Slider
        className={classes.slider}
        value={numberOfCards}
        onChange={handleNumberOfCardsChange}
        aria-labelledby="number-of-cards-slider"
        valueLabelDisplay="on"
        step={2}
        marks
        min={MINIMUM_NUMBER_OF_CARDS}
        max={MAXIMUM_NUMBER_OF_CARDS}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.label}>
          Card theme
        </FormLabel>
        <RadioGroup
          row
          className={classes.radioGroup}
          aria-label="card-theme"
          name="card-theme"
          value={cardThemeId}
          onChange={handleThemeChange}
        >
          {CARD_THEMES.map((cardThemeOption) => (
            <FormControlLabel //
              key={cardThemeOption.id}
              value={cardThemeOption.id}
              control={<Radio />}
              label={
                <ImageCard
                  className={classes.cardThemeOption}
                  src={`images/${cardThemeOption.id}/${randomImageId.current}.png`}
                  alt={cardThemeOption.title}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Fab
        color="primary"
        variant="extended"
        className={classes.startButton}
        onClick={handleConfirmButtonClick}
      >
        <PlayArrowIcon className={classes.extendedIcon} />
        Start game
      </Fab>
    </Card>
  );
});
