import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const body = props => (
  <>
    <Grid
      container
      direction="column"
      wrap="no-wrap"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <Typography>
            <Box fontSize={16} fontWeight="fontWeightBold" lineHeight={0}>
              Patient MR Number: 6543213
            </Box>
          </Typography>
        </DialogTitle>
      </Grid>
    </Grid>

    <DialogContent>
      <DialogContentText>
        <Typography>
          <Box
            style={{ display: "inline-block" }}
            fontSize={10}
            fontWeight="fontWeightBold"
            lineHeight={0}
          >
            Time:{props.time}
          </Box>
          <Box
            style={{ display: "inline-block", marginLeft: 8 }}
            fontSize={10}
            fontWeight="fontWeightBold"
            lineHeight={0}
          >
            Date: {props.date}
          </Box>
        </Typography>
      </DialogContentText>
      <div style={{ width: "100%" }}>
        <TextField
          style={{ width: "100%" }}
          label=""
          multiline
          value={props.details}
          rows={5}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          fullwidth="true"
          // onChange={props.handleChange}
        />
      </div>
    </DialogContent>

    <Grid
      container
      direction="column"
      wrap="no-wrap"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <DialogActions>
          <div style={{ width: 120, height: 50 }}>
            <Button
              variant="contained"
              // onClick={() => this.handleAcceptPendReject("accept")}
              onClick={props.handleAccept}
              color="primary"
            >
              Accept
            </Button>
          </div>
          <div style={{ width: 120, height: 50 }}>
            <Button
              variant="contained"
              onClick={props.handlePend}
              color="primary"
            >
              Append
            </Button>
          </div>
          <div style={{ width: 120, height: 50 }}>
            <Button
              variant="contained"
              onClick={props.handleReject}
              color="primary"
            >
              Reject
            </Button>
          </div>
        </DialogActions>
      </Grid>
    </Grid>
  </>
);
export default body;
