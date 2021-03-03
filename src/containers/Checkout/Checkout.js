import React, { useMemo, useReducer, useState } from "react";
import { useDispatch } from "react-redux";

import CheckoutSummary from "../../Components/CheckoutSummary/CheckoutSummary";
import Aux from "../../hoc/Auxileries";
import reducer from "./store/reducer";
import checkoutState from "./store/state";
import * as actions from "./store/actions";
import * as globalActions from "../../globalStore/actions/globalActions";
import Modal from "../../Components/UI/Modal/Modal";
import PromoSpin from "../../Components/PromoSpin/PromoSpin";
import GuestCheckout from "../../Components/CheckoutSummary/GuestCheckout/GuestCheckout";

export const StateContext = React.createContext();

const Checkout = (props) => {
  const [state, dispatch] = useReducer(reducer, checkoutState);
  const [promoSpinScreen, setPromoSpinScreen] = useState(false);
  const [input, setInput] = useState("");
  const globalDispatch = useDispatch();

  const userOrders = JSON.parse(localStorage.getItem("orders"));

  useMemo(() => {
    state.totalData = [];
    state.totalPrice = 0;
    Object.keys(userOrders).map((key, index) => {
      const data = {
        id: index + 1,
        item: userOrders[key].name,
        price: userOrders[key].totalPrice.toFixed(2),
      };

      state.totalPrice += userOrders[key].totalPrice;
      return state.totalData.push(data);
    });
  }, [state.totalData, state.totalPrice, userOrders]);

  state.promoSpinScreenCancel = () => {
    setPromoSpinScreen(false);
  };

  state.promoSpinClick = () => {
    setPromoSpinScreen(true);
  };

  const spinButtonClick = () => {
    dispatch({ type: actions.SET_WHEEL_SPIN });
  };

  state.promoCodeOnChange = (event) => {
    setInput(event.target.value);
  };

  state.includeClickHandler = () => {
    dispatch({ type: actions.PROMO_CODE_CLICK });
    if (input === state.promoCodeId) {
      dispatch({ type: actions.PROMO_CODE_MATCH });
      dispatch({ type: actions.VALID_PROMO_CODE });
    } else {
      dispatch({ type: actions.INVALID_PROMO_CODE });
    }
  };

  state.onCheckoutHandler = () => {
    dispatch({ type: actions.ON_CHECKOUT });
  };

  state.signInOnClickHandler = () => {
    props.history.replace({
      pathname: "/sign-in",
    });
    globalDispatch({ type: globalActions.TOOLBAR_RENDER });
  };

  return (
    <StateContext.Provider value={state}>
      <Aux>
        <Modal
          show={state.checkoutScreen}
          backdropClicked={state.onCheckoutHandler}
        >
          <GuestCheckout
            signInOnClick={state.signInOnClickHandler}
            cancelOnClick={state.onCheckoutHandler}
          />
        </Modal>
        <Modal
          show={promoSpinScreen}
          backdropClicked={state.promoSpinScreenCancel}
        >
          <PromoSpin onClick={spinButtonClick} />
        </Modal>
        <CheckoutSummary />
      </Aux>
    </StateContext.Provider>
  );
};

export default Checkout;
