import firebase from "firebase";

import * as actionTypes from "../action/actionTypes";
import * as globalActions from "../../globalStore/actions/globalActions";

export const fetchUserOrders = (orders) => {
  return {
    type: actionTypes.FETCH_USER_ORDERS,
    orders: orders,
  };
};

export const fetchUserDetails = (details) => {
  return {
    type: actionTypes.FETCH_USER_DETAILS,
    details: details,
  };
};

export const fetchUserData = (id, notDefault) => {
  return (dispatch) => {
    if (!notDefault) {
      dispatch({ type: globalActions.LOADING });
    }
    firebase
      .database()
      .ref("users/" + id + "/details/")
      .once("value")
      .then((snapShot) => {
        dispatch(fetchUserDetails(snapShot.val()));
      })
      .then(() =>
        firebase
          .database()
          .ref("users/" + id + "/orders/")
          .once("value")
          .then((snapShot) => {
            dispatch(fetchUserOrders(snapShot.val()));
            localStorage.setItem("orders", JSON.stringify(snapShot.val()));
          })
      )
      .then(() =>
        !notDefault ? dispatch({ type: globalActions.LOADING }) : null
      );
  };
};
