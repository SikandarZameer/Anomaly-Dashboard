import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(),
      backgroundColor: "lightgrey",
      color: "red",
      borderRadius: `15px`
    }
  },
  ib: {
    padding: "1px 15px"
  },
  inputMaginDense: {
    paddingLeft: "5px"
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <InputBase
        className={classes.ib}
        classes={{ inputMarginDense: classes.inputMaginDense }}
        placeholder="Search"
        fullWidth
        margin="dense"
        startAdornment={<SearchIcon />}
      />
    </form>
  );
};

export default SearchBar;
