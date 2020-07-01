import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
      value: "Symptom to Diagnosis Rule",
      helperTextone: "Symptom",
      helperTexttwo: "Diagnosis",
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
        body: JSON.stringify({
          tor: this.state.value,
          rules: this.state.rule
        })
      });
    } catch (e) {
      console.log(e);
    }

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", this.state.rule)
    //   .then(response => console.log(response));
  };

  handleRadioChange = event => {
    let helperone =
      event.target.value === "Symptom to Diagnosis Rule"
        ? "Symptom"
        : "Diagnosis";
    let helpertwo =
      event.target.value === "Symptom to Diagnosis Rule"
        ? "Diagnosis"
        : "Procedure";
    this.setState({
      value: event.target.value,
      helperTextone: helperone,
      helperTexttwo: helpertwo
    });
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of rule</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                row
                value={this.state.value}
                onChange={this.handleRadioChange}
              >
                <FormControlLabel
                  value="Symptom to Diagnosis Rule"
                  control={<Radio />}
                  label="Symptom to Diagnosis Rule"
                />
                <FormControlLabel
                  value="Diagnosos to Procedure Rule"
                  control={<Radio />}
                  label="Diagnosos to Procedure Rule"
                />
              </RadioGroup>
            </FormControl>
            <DialogContentText>
              Please enter your desired rules below.
            </DialogContentText>
            <TextField
              // autoFocus
              multiline
              margin="dense"
              id={this.state.helperTextone}
              label={this.state.helperTextone}
              fullWidth
              variant="outlined"
              onChange={this.handleChange("SDR")}
            />
            <TextField
              multiline
              margin="dense"
              id={this.state.helperTexttwo}
              label={this.state.helperTexttwo}
              fullWidth
              variant="outlined"
              onChange={this.handleChange("DSR")}
            />
          </DialogContent>
          <DialogActions>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                onClick={this.handleSubmit}
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
