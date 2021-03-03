import React from "react";

import Input from "../../Input/Input";
import { text } from "../../Input/InputTypes/InputTypes";
import { InputContext } from "../../../containers/Recipe/Recipe";
import classes from "./RecipeInput.module.css";

const recipeInput = (props) => {
  return (
    <InputContext.Consumer>
      {(context) => (
        <div className={classes.RecipeInput}>
          <h2 className={classes.Title}>Instantia Recipes</h2>
          <Input
            as={text}
            className={classes.Recipe}
            placeholder="recipe"
            name="recipe"
            onChange={context.onChange}
          />
          <Input
            as={text}
            className={classes.Author}
            placeholder="author"
            name="author"
            onChange={context.onChange}
          />
          <button className={classes.AddButton} onClick={context.addClicked}>
            ADD
          </button>
        </div>
      )}
    </InputContext.Consumer>
  );
};

export default recipeInput;
