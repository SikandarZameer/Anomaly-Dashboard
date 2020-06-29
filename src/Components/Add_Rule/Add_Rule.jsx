import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
// import axios from "axios";

const POST_API = "https://webhook.site/102097fa-bdd4-4074-8e0f-5508fad7b0d1";
//const API =  "https://jsonplaceholder.typicode.com/posts";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#form-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default class Add_Rule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rule: {
        SDR: null,
        DSR: null
      }
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      rule: {
        ...this.state.rule,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = async () => {
    this.setState({ open: false });
    try {
      await fetch(POST_API, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.rule)
      });
    } catch (e) {
      console.log(e);
    }

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", this.state.rule)
    //   .then(response => console.log(response));
  };

  render() {
    return (
      <div>
        <Button
          color="#fff"
          disableRipple
          disableFocusRipple
          disableElevation
          onClick={this.handleClickOpen}
        >
          Add Rule
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="form-dialog-title">
            Add Rule
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your desired rules below.
            </DialogContentText>
            <TextField
              autoFocus
              multiline
              margin="dense"
              id="Symptom to Disease Rule"
              label="Symptom to Disease Rule"
              fullWidth
              variant="outlined"
              onChange={this.handleChange("SDR")}
            />
            <TextField
              multiline
              margin="dense"
              id="Diagnosos to Service Rule"
              label="Diagnosos to Service Rule"
              fullWidth
              variant="outlined"
              onChange={this.handleChange("DSR")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
