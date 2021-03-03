import React, { useState } from "react";

import classes from "./PizzaSummary.module.css";
import Pizza from "../../Pizza/Pizza";

const PizzaSummary = (props) => {
  const [info, setInfo] = useState(false);
  const id = props.id;
  const index = props.orderTag - 1;

  const ingredientsSummary = props.summary.ingredients
    ? props.summary.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))
    : null;

  const pizzaStyle = {
    width: "80%",
    height: "63%",
    padding: "10px 0 0 0",
    margin: "auto",
    boxShadow: "none",
    gridTemplateRows: "6% 94%",
  };

  let infoStyle = info
    ? { transform: "translateY(0)" }
    : { transform: "translateY(300px)" };

  const infoClickHandler = () => {
    setInfo(!info);
  };

  return (
    <div className={classes.PizzaSummary}>
      <header className={classes.Header}>
        <p className={classes.Header_Tag}>#{props.orderTag}</p>
        <p className={classes.Header_Name}>{props.name}</p>
      </header>
      <div className={classes.InfoButton} onClick={infoClickHandler}>
        i
      </div>
      <Pizza summaryIngredients={props.ingredients} style={pizzaStyle} />
      <footer className={classes.Footer}>
        <p className={classes.Total}>Total: ${props.total.toFixed(2)}</p>
        <button
          className={classes.DeleteButton}
          onClick={() => props.deleteButton(id, index)}
        >
          Delete Order
        </button>
      </footer>
      <section className={classes.Info} style={infoStyle}>
        <ul className={classes.Ul_InfoSummary}>
          <li>Size: {props.summary.size}</li>
          <li>Sauce: {props.summary.sauce}</li>
          {props.summary.ingredients ? (
            <li>
              Ingredients:
              <ul className={classes.Ul_InfoSummary_Ingredients}>
                {ingredientsSummary}
              </ul>
            </li>
          ) : null}
        </ul>
      </section>
    </div>
  );
};

export default PizzaSummary;
