import React from "react";

import classes from "./RecipeComponent.module.css";
import RecipeInput from "./RecipeInput/RecipeInput";
import RecipesOutput from "./RecipesOutput/RecipesOutput";

const recipeComponent = (props) => {
  return (
    <div className={classes.RecipeComponent}>
      <RecipeInput />
      <RecipesOutput />
    </div>
  );
};

export default recipeComponent;
