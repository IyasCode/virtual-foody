import React from "react";

import classes from "./FormWrapper.module.css";

const formWrapper = (props) => (
  <div className={classes.FormWrapper}>{props.children}</div>
);

export default formWrapper;
