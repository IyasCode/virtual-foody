import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";

import classes from "./PizzaBuilder.module.css";
import * as actions from "./store/actions";
import Pizza from "../../Components/Pizza/Pizza";
import BuildControls from "../../Components/Pizza/BuildControls/BuildControls";
import Aux from "../../hoc/Auxileries";
import reducer from "./store/reducer";
import pizzaBuilderState from "./store/state";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Pizza/OrderSummary/OrderSummary";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import * as globalActions from "../../globalStore/actions/globalActions";
import addOrderToLocalStorage from "../../utilities/localStorage/addOrderToLocalStorage";

export const StateContext = React.createContext();

const PizzaBuilder = (props) => {
  const globalDispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [state, dispatch] = useReducer(reducer, pizzaBuilderState);
  let name = "";

  state.addUpClickedHandler = (event) => {
    dispatch({ type: actions.ADD_UP, ingredient: event.target.name });
  };

  state.takeAwayClickedHandler = (event) => {
    dispatch({ type: actions.TAKE_AWAY, ingredient: event.target.name });
  };

  state.choiceClickedHandler = (event) => {
    dispatch({ type: actions.CHOICE, ingredient: event.target.name });
  };

  state.orderClickedHandler = () => {
    dispatch({ type: actions.ORDER });
  };

  state.nameOnChangeHandler = (event) => {
    name = event.target.value;
  };

  state.orderContinueHandler = () => {
    const pizzaData = {
      type: state.type,
      name: name ? name : state.type,
      ingredients: [...state.chosenIngredients],
      summary: { ...state.summary },
      totalPrice: Number(state.totalPrice.toFixed(2)),
    };
    if (auth.id) {
      firebase
        .database()
        .ref("users/" + auth.id + "/orders/")
        .push(pizzaData)
        .then(() => globalDispatch(fetchUserData(auth.id)))
        .then(() => globalDispatch({ type: globalActions.LOADING }));
      globalDispatch({ type: globalActions.LOADING });
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    } else {
      addOrderToLocalStorage(pizzaData);
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    }
  };

  return (
    <StateContext.Provider value={state}>
      <Aux>
        <Modal
          show={state.orderClick}
          backdropClicked={state.orderClickedHandler}
        >
          <OrderSummary
            cancelClicked={state.orderClickedHandler}
            continueClicked={state.orderContinueHandler}
            nameOnChange={state.nameOnChangeHandler}
          />
        </Modal>
        <div className={classes.PizzaSet}>
          <Pizza builderIngredients={state.ingredients} />
          <BuildControls />
        </div>
      </Aux>
    </StateContext.Provider>
  );
};

export default PizzaBuilder;
