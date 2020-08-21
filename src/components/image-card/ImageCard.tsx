import React, { HTMLAttributes, ImgHTMLAttributes } from "react";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export default React.memo(function ImageCard({ ...imgProps }: Props) {
  const classes = useStyles();

  return (
    <Card raised>
      <img className={classes.cardImage} {...imgProps} />
    </Card>
  );
});
