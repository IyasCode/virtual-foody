import React, { useContext } from "react";

import classes from "./Beverages.module.css";
import Beverage from "./Beverage/Beverage";
import { StateContext } from "../../containers/BeveragePicker/BeveragePicker";

const Beverages = (props) => {
  const state = useContext(StateContext);
  const sectionStyle = {
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "1100px",
    overflow: "hidden",
  };

  let renderAllBeverage = state.beverages.map((beverage, index) => {
    const addZero = beverage[1].toString().split(".");
    return (
      <Beverage
        key={beverage[0] + index}
        name={beverage[0]}
        price={addZero[1] > 9 ? beverage[1] : beverage[1] + "0"}
        onClick={state.beveragePickedHandler}
      />
    );
  });

  return (
    <section className={classes.Beverages} style={sectionStyle}>
      {renderAllBeverage}
    </section>
  );
};

export default Beverages;
