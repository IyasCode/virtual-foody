import React, { useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "./PromoSpin.module.css";
// import promoSpinWheelImg from "../../assets/images/promoSpin/promo-spin-wheel.png";
// import promoSpinArrowImg from "../../assets/images/promoSpin/promo-spin-arrow.png";
// import copyImg from "../../assets/images/copy-to-clipboard.png";
import { StateContext } from "../../containers/Checkout/Checkout";

const PromoSpin = (props) => {
  const state = useContext(StateContext);
  const [finishScreen, setFinishScreen] = useState(false);
  const [copyText, setCopyText] = useState("copy");

  useEffect(() => {
    if (state.promoSpinComplete) {
      setTimeout(() => {
        setFinishScreen(true);
      }, 7000);
    }
  }, [state.promoSpinComplete]);

  const copyHandlerButton = (event) => {
    setCopyText("promo code copied");
  };

  return (
    <section className={classes.PromoSpin}>
      {finishScreen ? (
        <div className={classes.FinishScreen}>
          {state.promoSpinWon ? (
            <div className={classes.FinishScreen_Won}>
              <h2>CONGRATULATION!!!</h2>
              <h4>You won {state.percentage}% off</h4>
              <p>copy the promo code</p>
              <div className={classes.FinishScreen_Won_IdBox}>
                <h3>{state.promoCodeId}</h3>
                <CopyToClipboard text={state.promoCodeId}>
                  <div className={classes.tooltip} onClick={copyHandlerButton}>
                    <span className={classes.tooltiptext}>{copyText}</span>
                    <img
                      src={
                        "https://cdn.discordapp.com/attachments/791655883666620426/815224700636495922/copy-to-clipboard.png"
                      }
                      alt="copy to clipboard"
                      className={classes.CopyButton}
                    />
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          ) : (
            <div className={classes.FinishScreen_Lost}>
              <h2>Thank you for trying!</h2>
              <h4>No promo code for you</h4>
              <h4>Try again later.</h4>
              <button onClick={state.promoSpinScreenCancel}>close</button>
            </div>
          )}
        </div>
      ) : null}
      <div className={classes.PromoSpinImg}>
        <img
          className={classes.WheelImg}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815218775392911380/promo-spin-wheel.png"
          }
          alt="promo spin wheel"
          style={state.wheelStyle}
        />
        <img
          className={classes.ArrowImg}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815218767406694430/promo-spin-arrow.png"
          }
          alt="promo spin arrow"
        />
      </div>
      <button
        className={classes.SpinButton}
        onClick={props.onClick}
        disabled={state.spinClick}
      >
        SPIN
      </button>
    </section>
  );
};

export default PromoSpin;
