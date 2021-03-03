import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";

import beveragePickerState from "./store/state";
import reducer from "./store/reducer";
import Beverages from "../../Components/Beverages/Beverages";
import Aux from "../../hoc/Auxileries";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Beverages/OrderSummary/OrderSummary";
import * as actions from "./store/actions";
import * as globalActions from "../../globalStore/actions/globalActions";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import addOrderToLocalStorage from "../../utilities/localStorage/addOrderToLocalStorage";

export const StateContext = React.createContext();

const BeveragePicker = (props) => {
  const auth = useSelector((state) => state.auth);
  const globalDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, beveragePickerState);

  state.beveragePickedHandler = (event) => {
    dispatch({ type: actions.ORDER, beverage: event.target.title });
  };

  const orderCancelHandler = () => {
    dispatch({ type: actions.ORDER_CANCEL });
  };

  const orderContinueHandler = () => {
    const beverageData = {
      type: state.type,
      name: state.chosenBeverage[0],
      totalPrice: state.chosenBeverage[1],
    };
    if (auth.id) {
      globalDispatch({ type: globalActions.LOADING });
      firebase
        .database()
        .ref("users/" + auth.id + "/orders/")
        .push(beverageData)
        .then(() => globalDispatch(fetchUserData(auth.id)))
        .then(() => globalDispatch({ type: globalActions.LOADING }));
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    } else {
      addOrderToLocalStorage(beverageData);
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    }
  };

  return (
    <StateContext.Provider value={state}>
      <Aux>
        <Modal show={state.orderClick} backdropClicked={orderCancelHandler}>
          <OrderSummary
            cancelClicked={orderCancelHandler}
            continueClicked={orderContinueHandler}
          />
        </Modal>
        <Beverages />
      </Aux>
    </StateContext.Provider>
  );
};

export default BeveragePicker;
