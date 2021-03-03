import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import * as ingName from "../burgerIngrerdient/BurgerIngredientsName/BurgerIngredientsName";

const controls = [
  { label: "Salad", type: ingName.salad },
  { label: "Tomato", type: ingName.tomato },
  { label: "Meat", type: ingName.meat },
  { label: "Cheese", type: ingName.cheese },
  { label: "Bacon", type: ingName.bacon },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <div className={classes.Price}>price: $ {props.price.toFixed(2)}</div>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          clickMore={() => props.addIngredient(ctrl.type)}
          clickLess={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.disabledOrder}
      onClick={props.orderClicked}
    >
      Order now
    </button>
  </div>
);

export default buildControls;
