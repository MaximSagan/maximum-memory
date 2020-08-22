import React, { HTMLAttributes, ImgHTMLAttributes } from "react";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement> &
  Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
    isFaceUp?: boolean;
    isActive?: boolean;
    isMatched?: boolean;
  };

export default React.memo(function ImageCard({
  src,
  alt,
  className,
  isFaceUp = true,
  isActive = false,
  isMatched = false,
  ...divProps
}: Props) {
  const classes = useStyles();

  return (
    <div {...divProps} className={classNames(classes.root, className)}>
      <Card
        raised
        className={classNames(
          classes.card,
          !isFaceUp && classes.cardFlipped,
          isMatched && classes.cardMatched
        )}
      >
        <div
          className={classNames(classes.front, isActive && classes.frontActive)}
        >
          <img className={classes.cardImage} src={src} alt={alt} />
        </div>
        <div className={classes.back} />
      </Card>
    </div>
  );
});
