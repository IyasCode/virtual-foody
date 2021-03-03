import React from "react";

import classes from "./RecipesOutput.module.css";
import RecipeOutput from "./RecipeOutput/RecipeOutput";
import { RecipesContext } from "../../../containers/Recipe/Recipe";

const recipesOutput = (props) => {
  console.log("output");
  return (
    <RecipesContext.Consumer>
      {(datas) => {
        const recipesOutput = datas
          ? datas.map((data) => (
              <RecipeOutput
                key={data.author + data.recipe}
                recipe={data.recipe}
                author={data.author}
              />
            ))
          : null;

        return <div className={classes.RecipesOutput}>{recipesOutput}</div>;
      }}
    </RecipesContext.Consumer>
  );
};

export default recipesOutput;
