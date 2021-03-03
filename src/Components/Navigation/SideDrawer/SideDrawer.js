import React from "react";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxileries";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} backdropClicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems navClicked={props.navClicked} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
