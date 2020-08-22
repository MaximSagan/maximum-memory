import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";

interface Props {
  numberOfCards: number;
  numberOfMisses: number;
  onConfirm: () => void;
}

export default React.memo(function GameCompleteDialog({
  numberOfCards,
  numberOfMisses,
  onConfirm,
}: Props): JSX.Element {
  return (
    <Dialog
      open
      disableBackdropClick={true}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">Congratulations</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You matched {numberOfCards} cards with{" "}
          {numberOfMisses === 0
            ? "no misses"
            : numberOfMisses === 1
            ? "only one miss"
            : `${numberOfMisses} misses`}
          !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Fab color="primary" aria-label="add" onClick={onConfirm}>
          <CheckIcon />
        </Fab>
      </DialogActions>
    </Dialog>
  );
});
