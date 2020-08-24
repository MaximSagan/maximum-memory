import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { FLIP_TIME } from "../../constants";

export const useStyles = makeStyles((theme) => {
  const frontBackCommonStyles: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
  };
  return {
    root: {
      perspective: "1000px",
    },
    card: doubleClassSpecificity({
      position: "relative",
      overflow: "visible",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: `transform ${FLIP_TIME}ms`,
      transformStyle: "preserve-3d",
    }),
    cardFlipped: doubleClassSpecificity({
      transform: "rotateY(180deg)",
    }),
    "@keyframes highlightMatched": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" },
      "100%": { transform: "scale(1)" },
    },
    cardMatched: doubleClassSpecificity({
      animationName: "$highlightMatched",
      animationDuration: "0.4s",
    }),
    front: {
      ...frontBackCommonStyles,
      borderColor: "transparent",
      transition: "border-color 0.4s",
    },
    frontActive: {
      borderColor: theme.palette.primary.main,
    },
    back: {
      ...frontBackCommonStyles,
      // "Upholstry" pattern, from https://leaverou.github.io/css3patterns
      background: `
      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,
      radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 20px 20px,
      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 20px 0,
      radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 20px,
      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 20px 0,
      radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 40px 20px,
      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,
      radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 20px 20px,
      linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,
      linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0
    `,
      backgroundColor: "#300",
      backgroundSize: "40px 40px",
      borderColor: "black",
      color: "white",
      transform: "rotateY(180deg)",
      "&:hover": {
        borderColor: theme.palette.primary.main,
        borderWidth: 4,
      },
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  };
});

/**
 * Increasing specificity due to known Material UI issue of inconsitency of class declaration order (https://github.com/mui-org/material-ui/issues/21627)
 */
function doubleClassSpecificity(cssProperties: CSSProperties): CSSProperties {
  return {
    "&&": cssProperties,
  };
}
