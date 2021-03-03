import React from "react";

import classes from "./RecipeOutput.module.css";

const recipeOutput = (props) => {
  return (
    <div className={classes.RecipeOutput}>
      <p className={classes.Recipe}>{props.recipe}</p>
      <p className={classes.Author}>by: {props.author}</p>
    </div>
  );
};

export default recipeOutput;
