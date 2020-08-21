import React, { useState, useCallback } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { GameSettings, CARD_THEMES } from "../../types";
import { useStyles } from "./styles";
import ImageCard from "../image-card/ImageCard";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

interface Props {
  onConfirmGameSettings: (settings: GameSettings) => void;
}

export default React.memo(function Settings({
  onConfirmGameSettings,
}: Props): JSX.Element {
  const classes = useStyles();
  const [cardThemeId, setCardThemeId] = useState(CARD_THEMES[0].id);
  const [numberOfCards, setNumberOfCards] = useState(20);

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
  const handleConfirmButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onConfirmGameSettings({ cardTheme: CARD_THEMES.find(({ id }) => id === cardThemeId)!, numberOfCards });
  }, [onConfirmGameSettings, cardThemeId, numberOfCards]

  );
  return (
    <Card className={classes.root}>
      <Typography variant="h4" className={classes.title}>Setup game</Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.label}>Card theme</FormLabel>
        <RadioGroup
          row
          className={classes.radioGroup}
          aria-label="gender"
          name="gender1"
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
                  src={`/images/${cardThemeOption.id}/0.png`}
                  alt={cardThemeOption.title}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Typography id="number-of-cards-slider" className={classes.label}>
        Number of cards
      </Typography>
      <Slider
        value={numberOfCards}
        onChange={handleNumberOfCardsChange}
        aria-labelledby="number-of-cards-slider"
        valueLabelDisplay="on"
        step={2}
        marks
        min={4}
        max={40}
      />

      <Button variant="outlined" className={classes.startButton} onClick={handleConfirmButtonClick}>Start game</Button>
    </Card>
  );
});
