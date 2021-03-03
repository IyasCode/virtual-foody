import React from "react";

import classes from "./MenuLayout.module.css";
import MenusOutput from "../MenuLayout/MenusOutput/MenusOutput";

const menuLayout = (props) => {
  return (
    <div className={classes.MenuLayout}>
      <h1 className={classes.SelectMenuText}>Select Menu</h1>
      <div className={classes.MenuOutput}>
        <MenusOutput choiceOfMenu={props.choiceOfMenu} />
      </div>
    </div>
  );
};

export default menuLayout;
