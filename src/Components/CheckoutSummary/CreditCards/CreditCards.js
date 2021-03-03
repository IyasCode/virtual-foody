import React, { useContext, useState } from "react";
import Cards from "react-credit-cards";

import classes from "./CreditCards.module.css";
import "react-credit-cards/es/styles-compiled.css";
import * as inputTypes from "../../Input/InputTypes/InputTypes";
import { StateContext } from "../../../containers/Checkout/Checkout";

const CreditCards = (props) => {
  const state = useContext(StateContext);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <section className={classes.CreditCards}>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <input
        type={inputTypes.number}
        className={classes.CardNumber}
        name="number"
        placeholder="Card Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
        maxLength="10"
      />
      <input
        type={inputTypes.text}
        className={classes.Name}
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      />
      <div className={classes.LastRow_Input}>
        <input
          type={inputTypes.number}
          className={classes.Expiry}
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type={inputTypes.number}
          className={classes.Cvc}
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </div>
      <button
        className={classes.CheckoutButton}
        onClick={state.onCheckoutHandler}
      >
        CHECKOUT
      </button>
    </section>
  );
};

export default CreditCards;
