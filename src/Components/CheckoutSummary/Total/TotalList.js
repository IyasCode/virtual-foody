import React, { useContext } from "react";

import classes from "./TotalList.module.css";
import Table from "./Table/Table";
import { StateContext } from "../../../containers/Checkout/Checkout";
import totalMinusPercentage from "../../../utilities/math/totalMinusPercentage";

const TotalList = (props) => {
  const state = useContext(StateContext);

  return (
    <section className={classes.TotalList}>
      <div className={classes.Table}>
        <Table />
      </div>
      {state.promoCodeAvailable ? (
        <div className={classes.Total}>
          <table className={classes.Total_Table}>
            <tbody>
              <tr>
                <td className={classes.Total_Table_Left}>subtotal:</td>
                <td>$ {state.totalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td className={classes.Total_Table_Left}></td>
                <td className={classes.Total_Table_Percentage}>
                  -{state.percentage}%
                </td>
              </tr>
              <tr>
                <td className={classes.Total_Table_LastRow}>Total:</td>
                <td className={classes.Total_Table_LastRow}>
                  $ {totalMinusPercentage(state.totalPrice, state.percentage)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className={classes.Total}>
          <h3>Total:</h3>
          <h3>$ {state.totalPrice.toFixed(2)}</h3>
        </div>
      )}

      <div className={classes.PromoCode}>
        <input
          className={
            state.promoCodeClick
              ? state.invalidPromoCode
                ? classes.PromoInputFalse
                : classes.PromoInputTrue
              : classes.PromoInput
          }
          placeholder="PROMO CODE"
          onChange={state.promoCodeOnChange}
        />
        <button
          className={classes.PromoButton}
          onClick={state.includeClickHandler}
        >
          Include
        </button>
      </div>
    </section>
  );
};

export default TotalList;
