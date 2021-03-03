import React, { useContext } from "react";

import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";
import { StateContext } from "../../../containers/PizzaBuilder/PizzaBuilder";

const OrderSummary = (props) => {
  const state = useContext(StateContext);

  let ingredientsCount = 0;
  let ingredients = state.ingredients.map((ingKey, index) => {
    if (ingKey[1] && index > 2) {
      ingredientsCount++;
      return (
        <li key={ingKey[0]} style={{ listStyleType: "none" }}>
          {ingKey[0]}
        </li>
      );
    }
    return null;
  });

  let pizzaSauce = "";
  for (let i = 0; i <= 2; i++) {
    if (state.ingredients[i][1]) {
      const sauceType = state.ingredients[i][0].split("S");
      pizzaSauce = sauceType[0];
      break;
    }
    pizzaSauce = "None";
  }

  return (
    <div className={classes.OrderSummary}>
      <input
        className={classes.Input}
        placeholder="Name your pizza"
        maxLength="20"
        onChange={props.nameOnChange}
      />
      <ul>
        <li>Size: {state.pizzaSize}</li>
        <li>Sauce: {pizzaSauce}</li>
        {ingredientsCount ? (
          <li>
            Ingredients:
            <ul>{ingredients}</ul>
          </li>
        ) : null}
      </ul>
      <h5 className={classes.Total}>Total: ${state.totalPrice.toFixed(2)}</h5>
      <div className={classes.Checkout}>
        <h4 className={classes.ContinueCheckout}>Add to list?</h4>
        <Button buttonType="Success" clicked={props.continueClicked}>
          Confirm
        </Button>
        <Button buttonType="Danger" clicked={props.cancelClicked}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
