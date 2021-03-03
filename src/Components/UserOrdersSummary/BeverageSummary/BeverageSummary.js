import React from "react";

import classes from "./BeverageSummary.module.css";
import BeverageImage from "../../Beverages/Beverage/BeverageImage/BeverageImage";

const beverageSummary = (props) => {
  const id = props.id;
  const index = props.orderTag - 1;

  return (
    <div className={classes.BeverageSummary}>
      <header className={classes.Header}>
        <p className={classes.Header_Tag}>#{props.orderTag}</p>
        <p className={classes.Header_Name}>{props.name}</p>
      </header>
      <div className={classes.BeverageImg}>
        <BeverageImage name={props.name} />
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
    </div>
  );
};

export default beverageSummary;
