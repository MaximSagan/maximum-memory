import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  slider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
  },
  label: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  },
  cardThemeOption: {
    width: 90,
    height: 90,
  },
  startButton: {
    marginTop: theme.spacing(4),
    alignSelf: "flex-end",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
