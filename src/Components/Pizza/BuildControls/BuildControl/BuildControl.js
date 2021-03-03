import React, { useContext } from "react";

import classes from "./BuildControl.module.css";
import { StateContext } from "../../../../containers/PizzaBuilder/PizzaBuilder";

const BuildControl = (props) => {
  const state = useContext(StateContext);

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      {typeof props.type === "string" ? (
        <div className={classes.ButtonBox}>
          <button
            name={props.type}
            className={classes.Less}
            onClick={state.takeAwayClickedHandler}
            disabled={!state.ingredients[props.index + 1][1]}
          >
            take away
          </button>
          <button
            name={props.type}
            className={classes.More}
            onClick={state.addUpClickedHandler}
            disabled={state.ingredients[props.index + 1][1]}
          >
            add up
          </button>
        </div>
      ) : (
        <div className={classes.ButtonBox}>
          {props.type.map((input, index) => (
            <button
              key={input + index}
              name={input[0]}
              className={
                input[0] === state.pizzaSize
                  ? classes.SizeButtonClicked
                  : input[0] === state.ingredients[index][0] &&
                    state.ingredients[index][1]
                  ? classes.ChoiceButtonClicked
                  : classes.ChoiceButton
              }
              onClick={state.choiceClickedHandler}
            >
              {input[1]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuildControl;
