import React from "react";
import Link from "next/link";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  setButtons: {
    display: "flex",
    flexDirection: "row", //change to coloum to stack the buttons
    margin: "auto",
    width: "fit-content"
  }
}));

export default function VirtualTourDialog() {
  const classes = useStyles();
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(true);

  const TourButton = withStyles({
    root: {
      background: "linear-gradient(97.64deg, #ED2B2E 1.91%, #FF5B5E 100%)",
      borderRadius: 20,
      border: 0,
      color: "white",
      width: 150,
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(237, 43, 46, .3)"
    },
    label: {
      textTransform: "capitalize"
    }
  })(Button);

  const SkipButton = withStyles({
    root: {
      borderRadius: 20,
      border: "1px solid #ED2B2E",
      color: "#ED2B2E",
      width: 150,
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(237, 43, 46, .3)"
    },
    label: {
      textTransform: "capitalize"
    }
  })(Button);

  const handleSkip = () => {
    setOpen(false);
    console.log("Look at Me Hey. Skip is triggered");
  };

  return (
    <React.Fragment>
      {open && (
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={true}
          aria-labelledby="virtual-tour-dialog-title"
          onEnter={console.log("Look at Me Hey. Dialog opened")}
        >
          <DialogContent>
            <DialogContentText>
              -- later is display logo and mascot{" "}
            </DialogContentText>
          </DialogContent>
          <DialogTitle id="virtual-tour-dialog-title">Take Tour?</DialogTitle>

          <DialogActions className={classes.setButtons}>
            <Link href="/register-tour" passHref>
              <TourButton variant="contained" color="secondary">
                Yes!
              </TourButton>
            </Link>
            <SkipButton onClick={handleSkip} color="primary">
              Skip
            </SkipButton>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}
