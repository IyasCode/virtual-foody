import React, { useState } from "react";

import classes from "./BurgerSummary.module.css";
import Burger from "../../Burger/Burger";

const BurgerSummary = (props) => {
  const [info, setInfo] = useState(false);
  const id = props.id;
  const index = props.orderTag - 1;

  const burgerStyle = {
    width: "240px",
    height: "168px",
    margin: "auto",
  };

  let infoStyle = info
    ? { transform: "translateY(0)" }
    : { transform: "translateY(300px)" };

  const infoClickHandler = (props) => {
    setInfo(!info);
  };

  const ingredients = Object.entries(props.order).map((count, index) => {
    return (
      <li key={count + index}>
        {count[0]}: {count[1]}
      </li>
    );
  });

  return (
    <div className={classes.BurgerSummary}>
      <div className={classes.Background}></div>
      <header className={classes.Header}>
        <p className={classes.Header_Tag}>#{props.orderTag}</p>
        <p className={classes.Header_Name}>{props.name}</p>
      </header>
      <div className={classes.InfoButton} onClick={infoClickHandler}>
        i
      </div>
      <div className={classes.BurgerBox}>
        <Burger style={burgerStyle} ingredient={props.ingredient} />
      </div>
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
        <ul className={classes.Ulingredient}>
          <li className={classes.FirstList}>Ingredients</li>
          {ingredients}
        </ul>
      </section>
    </div>
  );
};

export default BurgerSummary;
