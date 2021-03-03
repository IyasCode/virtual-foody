import React, { useContext } from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import * as pizzaIngName from "../PizzaIngredient/PizzaIngredientsName/PizzaIngredientsName";
import { StateContext } from "../../../containers/PizzaBuilder/PizzaBuilder";

const controls = [
  {
    label: "Pizza Size",
    type: [
      [pizzaIngName.small, "small"],
      [pizzaIngName.medium, "medium"],
      [pizzaIngName.large, "large"],
    ],
  },
  {
    label: "Pizza Sauce",
    type: [
      [pizzaIngName.cheezySauce, "cheese"],
      [pizzaIngName.tomatoSauce, "tomato"],
      [pizzaIngName.mushroomSauce, "mushroom"],
    ],
  },
  { label: "Double Layer Crust", type: pizzaIngName.doubleLayerCrust },
  { label: "Pepperoni", type: pizzaIngName.pepperoni },
  { label: "Prawn", type: pizzaIngName.prawn },
  { label: "Fish", type: pizzaIngName.fish },
  { label: "Mushroom", type: pizzaIngName.mushroom },
  { label: "Pineapple", type: pizzaIngName.pineapple },
  { label: "Tomato", type: pizzaIngName.tomato },
  { label: "Onion", type: pizzaIngName.onion },
  { label: "Pepper", type: pizzaIngName.pepper },
  { label: "Mint", type: pizzaIngName.mint },
  { label: "Cheese Sprinkle", type: pizzaIngName.cheeseSprinkle },
];

const BuildControls = (props) => {
  const state = useContext(StateContext);

  return (
    <div className={classes.BuildControls}>
      <div className={classes.Price}>
        price: $ {state.totalPrice.toFixed(2)}
      </div>
      <div className={classes.Ingredients}>
        {controls.map((ctrl, i) => {
          return (
            <BuildControl
              key={ctrl.label + i}
              label={ctrl.label}
              type={ctrl.type}
              index={i}
              // clickMore={() => props.addIngredient(ctrl.type)}
              // clickLess={() => props.removeIngredient(ctrl.type)}
              // disabled={props.disabled[ctrl.type]}
            />
          );
        })}
      </div>

      <button
        className={classes.OrderButton}
        disabled={!Math.fround(state.totalPrice.toFixed(2))}
        onClick={state.orderClickedHandler}
      >
        Order now
      </button>
    </div>
  );
};

export default BuildControls;
