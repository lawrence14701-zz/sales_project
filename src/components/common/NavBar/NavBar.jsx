import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core ";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar(props) {
  const {} = props;

  return (
    <AppBar
      position="fixed"
      // className={clsx(classes.appBar, {
      //   [classes.appBarShift]: open,
      // })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // onClick={}
          edge="start"
          s
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {};

export default NavBar;
