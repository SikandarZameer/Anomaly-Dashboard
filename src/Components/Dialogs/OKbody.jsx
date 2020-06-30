import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Grid from "@material-ui/core/Grid";
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
        <CheckCircleOutlineIcon
          style={{
            width: 200,
            height: 200
            // fill: "yellow"
          }}
        />
      </Grid>
      {/* <img src={logo} alt="Logo" /> */}
      <Grid item xs={12}>
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <Typography>
            <Box fontSize={32} fontWeight="fontWeightBold" lineHeight={0}>
              Success!
            </Box>
          </Typography>{" "}
        </DialogTitle>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          <Box fontSize={16} fontWeight="fontWeightRegular" lineHeight={2}>
            Your response was submitted successfully!
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <DialogActions>
          <div style={{ width: 120 }}>
            <Button
              autoFocus
              fullWidth={true}
              size="large"
              variant="contained"
              onClick={props.handleClose}
              color="primary"
            >
              ok
            </Button>
          </div>
        </DialogActions>
      </Grid>
    </Grid>
  </>
);
export default body;
