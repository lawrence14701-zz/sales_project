import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import SectionTitle from "./SectionTitle";
import NavDrawerTitle from "./NavDrawerTitle";
import NavList from "./NavList";
import ToggleDrawer from "./ToggleDrawer";

export default function NavDrawer() {
  const classes = useStyles();

  const toggleOpen = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  };

  return (
    <div>
      <React.Fragment>
        <Drawer open={true}>
          <div className={classes.drawer}>
            <NavDrawerTitle>Admin Tool </NavDrawerTitle>
            <Divider />
            <SectionTitle>Section Title</SectionTitle>
            <NavList />
            <Divider />
            <ToggleDrawer />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    color: "white",
    backgroundColor: "#3c4b64",
    height: "100%",
  },
  title: {
    color: "hsla(0,0%,100%,.6)",
  },
});
