import React from "react";

import classes from "./Pizza.module.css";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import * as pizzaIngName from "./PizzaIngredient/PizzaIngredientsName/PizzaIngredientsName";

const Pizza = (props) => {
  let transformIngredient = props.builderIngredients
    ? props.builderIngredients.map((ingKey, i) => {
        if (ingKey[1]) {
          return <PizzaIngredient key={ingKey[0] + i} type={ingKey[0]} />;
        }
        return null;
      })
    : props.summaryIngredients.map((ingredient) => (
        <PizzaIngredient key={ingredient} type={ingredient} />
      ));

  return (
    <div className={classes.Pizza} style={props.style}>
      <PizzaIngredient type={pizzaIngName.plainPizza} />
      {transformIngredient}
    </div>
  );
};

export default Pizza;
