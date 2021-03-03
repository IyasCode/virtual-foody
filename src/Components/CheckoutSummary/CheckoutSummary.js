import React, { useContext } from "react";

import classes from "./CheckoutSummary.module.css";
import CreditCards from "./CreditCards/CreditCards";
import TotalList from "./Total/TotalList";
import { StateContext } from "../../containers/Checkout/Checkout";
// import promoSpinButtonImg from "../../assets/images/promoSpin/promo-spin-button.png";

const CheckoutSummary = (props) => {
  const state = useContext(StateContext);

  return (
    <section className={classes.CheckoutSummary}>
      <img
        className={classes.PromoSpinButton}
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815218770229461012/promo-spin-button.png"
        }
        alt="promo spin button"
        onClick={state.promoSpinClick}
      />
      <div className={classes.TotalList}>
        <TotalList />
      </div>
      <div className={classes.CreditCards}>
        <CreditCards />
      </div>
    </section>
  );
};

export default CheckoutSummary;
