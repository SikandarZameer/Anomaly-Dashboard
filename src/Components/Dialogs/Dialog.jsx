import React from "react";
import Dialog from "@material-ui/core/Dialog";

const Modal = props => (
  <>
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth="true"
      maxWidth="sm"
      PaperComponent={props.PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      {props.children}
    </Dialog>
  </>
);
export default Modal;
