import React from "react";

import BurgerSummary from "./BurgerSummary/BurgerSummary";
import PizzaSummary from "./PizzaSummary/PizzaSummary";
import BeverageSummary from "./BeverageSummary/BeverageSummary";

const CheckoutSummary = (props) => {
  const userOrder = props.userOrder;
  const id = props.id;

  switch (userOrder.type) {
    case "burger":
      return (
        <BurgerSummary
          id={id}
          orderTag={props.orderTag}
          name={userOrder.name}
          ingredient={userOrder.burgerIngredients}
          order={userOrder.ingredients}
          total={userOrder.totalPrice}
          deleteButton={props.deleteButton}
        />
      );
    case "pizza":
      return (
        <PizzaSummary
          id={id}
          orderTag={props.orderTag}
          name={userOrder.name}
          ingredients={userOrder.ingredients}
          summary={userOrder.summary}
          total={userOrder.totalPrice}
          deleteButton={props.deleteButton}
        />
      );
    case "beverage":
      return (
        <BeverageSummary
          id={id}
          orderTag={props.orderTag}
          name={userOrder.name}
          total={userOrder.totalPrice}
          deleteButton={props.deleteButton}
        />
      );

    default:
      return null;
  }
};

export default CheckoutSummary;
