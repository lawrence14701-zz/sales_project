import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

function NavDrawerTitle(props) {
  const { children } = props;

  return (
    <Box padding={2}>
      <Typography variant="h4">{children}</Typography>
    </Box>
  );
}

NavDrawerTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavDrawerTitle;
