import React, { Component } from "react";
import Draggable from "react-draggable";
import { Paper, Button } from "@material-ui/core";
import Descriptionbody from "./Descriptionbody";
import Reasonbody from "./Reasonbody";
import Okbody from "./OKbody";
import Dialog from "./Dialog";
// import axios from "axios";

// const POST_API = "https://webhook.site/462bc21d-091e-4609-8ff5-172e205f4423";
const POST_API_1 = "https://webhook.site/102097fa-bdd4-4074-8e0f-5508fad7b0d1";
const POST_API_2 = "https://jsonplaceholder.typicode.com/posts";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default class PendRejectDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openreason: false,
      openok: false,
      isLoaded: false,
      description: null,
      reason: null,
      explanation: {
        accept: null,
        pend: null,
        reject: null
      },
      time: "",
      date: ""
    };
  }

  gettData = async () => {
    await fetch(POST_API_2)
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          description: json[0].body
        })
      )
      .catch(error => console.log(error));
  };

  handleClickOpen = () => {
    this.gettData();

    this.setState({
      open: true,
      explanation: {
        accept: "",
        pend: "",
        reject: ""
      },
      time: new Date().toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      }),
      date: new Date().toLocaleDateString()
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      openreason: false,
      openok: false
    });
  };

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };
  handleAccept = () => {
    this.handleAcceptPendReject("accept");
  };

  handlePend = () => {
    this.handleAcceptPendReject("pend");
  };

  handleReject = () => {
    this.handleAcceptPendReject("reject");
  };

  handleAcceptPendReject = name => {
    this.setState(st => ({
      open: false,
      openreason: true,
      explanation: {
        ...st.explanation,
        [name]: "true"
      }
    }));
  };

  handleSubmitChange = event => {
    this.setState({
      reason: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState(
      st => ({
        openreason: false,
        openok: true
      }),
      this.postData
    );
    // this.postData();
  };

  postData = async () => {
    // await axios
    //   .post(POST_API_2, {
    //     time: this.state.time,
    //     date: this.state.date,
    //     description: this.state.description,
    //     explanation: this.state.explanation
    //   })
    //   .then(response =>
    //     response.status === 201
    //       ? console.log(response.data)
    //       : console.log("error")
    //   );

    await fetch(POST_API_1, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        time: this.state.time,
        date: this.state.date,
        explanation: this.state.explanation,
        reason: this.state.reason
      })
    }).then(res => {
      if (res.status !== 200) {
        console.log(res.data);
      } else {
        res.json().then(data => {
          console.log(data);
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        {this.state.open && (
          <Dialog
            open={this.state.open}
            handleClose={this.handleClose}
            PaperComponent={PaperComponent}
          >
            <Descriptionbody
              time={this.state.time}
              details={this.state.description}
              date={this.state.date}
              handleChange={this.handleChange}
              handleAccept={this.handleAccept}
              handlePend={this.handlePend}
              handleReject={this.handleReject}
            />
          </Dialog>
        )}
        {this.state.openreason && (
          <Dialog
            open={this.state.openreason}
            handleClose={this.handleClose}
            PaperComponent={PaperComponent}
          >
            <Reasonbody
              handleSubmitChange={this.handleSubmitChange}
              handleSubmit={this.handleSubmit}
            />
          </Dialog>
        )}
        {this.state.openok && (
          <Dialog
            open={this.state.openok}
            handleClose={this.handleClose}
            PaperComponent={PaperComponent}
          >
            <Okbody handleClose={this.handleClose} />
          </Dialog>
        )}
      </div>
    );
  }
}
