import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SectionTitle(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box padding={2}>
      <Typography variant="h4" className={classes.title}>
        {children}
      </Typography>
    </Box>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;

const useStyles = makeStyles({
  title: {
    fontSize: "20px",
    color: "hsla(0,0%,100%,.6)",
  },
});
