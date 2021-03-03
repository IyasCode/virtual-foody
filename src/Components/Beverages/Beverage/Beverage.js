import React from "react";

import classes from "./Beverage.module.css";
import BeverageImage from "./BeverageImage/BeverageImage";

const Beverage = (props) => {
  return (
    <div className={classes.Beverage} onClick={props.onClick}>
      <div className={classes.CoverButton} title={props.name}></div>
      <div className={classes.Beverage_Image}>
        <BeverageImage name={props.name} />
      </div>
      <h3 className={classes.Beverage_Name}>{props.name}</h3>
      <div className={classes.Button}>
        <p>Add</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default Beverage;
