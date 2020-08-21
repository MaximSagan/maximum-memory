import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
  },
  label: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
  },
  startButton: {
    marginTop: theme.spacing(4),
    textAlign: "right",
  },
}));
