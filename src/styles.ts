import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}));
