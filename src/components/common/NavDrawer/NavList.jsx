import React from "react";
import PropTypes from "prop-types";
import { Box, List, ListItem } from "@material-ui/core";

function NavList(props) {
  const {} = props;

  return (
    <List>
      <Box>
        <ListItem>tab one</ListItem>
      </Box>
      <Box>
        <ListItem>tab two</ListItem>
      </Box>
    </List>
  );
}

NavList.propTypes = {};

export default NavList;
