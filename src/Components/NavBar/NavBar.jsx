import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import SearchBar from "./SearchBar";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  buttonRoot: {
    minWidth: "fit-content"
  },
  active: {
    // fontSize: "15px",
    fontWeight: "bold"
  },
  Appbar: {
    backgroundColor: "#fff"
  },
  customizeToolbar: {
    minHeight: 36
  },
  title: {
    flexGrow: 1
  },
  divSearch: {
    width: "100%",
    margin: "0px 15px"
  },
  typography: {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2)
    }
  }
});

// const classes = useStyles();

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todisplay: false
    };
  }

  handleAnalysisClick = () => {
    this.setState({ todisplay: true });
  };

  handleHomeClick = () => {
    this.setState({ todisplay: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.Appbar} position="fixed">
          <Toolbar className={classes.customizeToolbar}>
            <Button
              className={classes.buttonRoot}
              activeClassName={classes.active}
              exact
              disableRipple
              disableFocusRipple
              disableElevation
              onClick={this.handleHomeClick}
              component={NavLink}
              to="/home"
              color="#fff"
            >
              Home
            </Button>
            <Button
              className={classes.buttonRoot}
              activeClassName={classes.active}
              exact
              disableRipple
              disableFocusRipple
              disableElevation
              onClick={this.handleAnalysisClick}
              component={NavLink}
              to="/patientanomalydashboard"
              color="#fff"
            >
              Patient Analysis
            </Button>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={1} />
              <Grid item xs={7}>
                <div className={classes.divSearch}>
                  {this.state.todisplay && (
                    <SearchBar callback_func={this.props.callback_func} />
                  )}
                </div>
              </Grid>
              <Grid item xs={1} />
              <Grid
                item
                container
                xs={3}
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <IconButton
                    style={{ marginRight: "5px" }}
                    aria-label="show 17 new notifications"
                  >
                    <Badge badgeContent={200} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Avatar src="/broken-image.jpg" classname={classes.avatar} />
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    color="textPrimary"
                    display="inline"
                  >
                    Hi, Analyst
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
