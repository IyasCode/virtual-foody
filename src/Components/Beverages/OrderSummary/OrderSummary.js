import React, { useContext } from "react";

import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";
import { StateContext } from "../../../containers/BeveragePicker/BeveragePicker";

const OrderSummary = (props) => {
  const state = useContext(StateContext);

  let checkZero = state.chosenBeverage
    ? state.chosenBeverage[1].toString().split(".")
    : null;

  return (
    <div className={classes.OrderSummary}>
      <p className={classes.Confirmation}>Order confirmation:</p>
      {state.chosenBeverage ? (
        <p className={classes.ChosenBeverage}>
          {state.chosenBeverage[0]} $
          {checkZero[1] > 9
            ? state.chosenBeverage[1]
            : state.chosenBeverage[1] + "0"}
        </p>
      ) : null}
      <div className={classes.Checkout}>
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
