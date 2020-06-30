import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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
              Reason
            </Box>
          </Typography>
        </DialogTitle>
      </Grid>
    </Grid>

    <DialogContent>
      <div style={{ width: "100%" }}>
        <TextField
          style={{ width: "100%" }}
          label=""
          multiline
          placeholder="Details"
          rows={5}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          fullwidth="true"
          onChange={props.handleSubmitChange}
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
          <div style={{ width: 150, height: 50 }}>
            <Button
              variant="contained"
              // onClick={() => this.handleAcceptPendReject("accept")}
              onClick={props.handleSubmit}
              color="primary"
            >
              Submit
            </Button>
          </div>
        </DialogActions>
      </Grid>
    </Grid>
  </>
);
export default body;
