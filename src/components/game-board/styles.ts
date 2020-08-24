import { makeStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  numberOfCards: number;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 980,
    width: `calc(100vw - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2.5),
    [theme.breakpoints.up("lg")]: {
      width: `calc(100vw - ${theme.spacing(8)}px)`,
    },
  },
  gameCards: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginLeft: -theme.spacing(1),
    marginRight: -theme.spacing(1),
  },
  imageCard: ({ numberOfCards }: StyleProps) => ({
    margin: theme.spacing(1),
    width: numberOfCards < 20 ? 70 : 50,
    height: numberOfCards < 20 ? 70 : 50,
    [theme.breakpoints.up("lg")]: {
      width: numberOfCards < 20 ? 140 : 70,
      height: numberOfCards < 20 ? 140 : 70,
    },
  }),
  gameInfo: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  hideCardsCountdown: {
    opacity: 1,
    transition: "opacity 1s",
  },
  hideCardsCountdownFinished: {
    opacity: 0,
  },
  progress: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));
