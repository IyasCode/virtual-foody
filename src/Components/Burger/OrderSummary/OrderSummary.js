import React, { Component } from "react";
import Aux from "../../../hoc/Auxileries";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

class OrderSummary extends Component {
  render() {
    const ingredients = Object.keys(this.props.ingredients).map((key) => {
      return (
        <li key={key} style={{ listStyleType: "none" }}>
          {key}: {this.props.ingredients[key]}
        </li>
      );
    });

    return (
      <Aux>
        <input
          className={classes.Input}
          placeholder="Name your burger"
          maxLength="20"
          onChange={this.props.nameOnChange}
        />
        <ul>{ingredients}</ul>
        <h5 className={classes.Total}>Total: ${this.props.total.toFixed(2)}</h5>
        <div className={classes.Checkout}>
          <h4 className={classes.ContinueCheckout}>Add to list?</h4>
          <Button buttonType="Success" clicked={this.props.continueClicked}>
            Confirm
          </Button>
          <Button buttonType="Danger" clicked={this.props.cancelClicked}>
            Cancel
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
