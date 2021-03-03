import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.clickLess}
      disabled={props.disabled}
    >
      less
    </button>
    <button className={classes.More} onClick={props.clickMore}>
      more
    </button>
  </div>
);

export default buildControl;
