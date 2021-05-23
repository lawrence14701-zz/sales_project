import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

function ToggleDrawer(props) {
  const {} = props;
  const classes = useStyles();

  return (
    <Box padding={2} className={classes.root}>
      <ArrowBackIosIcon className={classes.icon} />
    </Box>
  );
}

ToggleDrawer.propTypes = {};

export default ToggleDrawer;

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(0,0,21,.2)",
    display: "flex",
    justifyContent: "flex-end",
  },
});
