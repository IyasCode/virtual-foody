import firebase from "firebase/app";

import * as actionTypes from "./actionTypes";
import createNewUserData from "./createNewUserData";
import * as globalActions from "../../../../globalStore/actions/globalActions";
import { fetchUserData } from "../../../../userStore/action/fetchUserData";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logOut = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("idToken");
  localStorage.removeItem("orders");
  firebase.auth().signOut();
  return {
    type: actionTypes.LOGOUT,
  };
};

export const auth = (
  email,
  password,
  method,
  name,
  address,
  city,
  postal,
  phone
) => {
  let auth = null;
  let userId = null;

  switch (method) {
    case actionTypes.SIGN_UP:
      auth = firebase.auth().createUserWithEmailAndPassword(email, password);
      break;
    case actionTypes.SIGN_IN:
      auth = firebase.auth().signInWithEmailAndPassword(email, password);
      break;
    default:
      break;
  }

  return (dispatch) => {
    dispatch(authStart());
    auth
      .then((response) => {
        if (method === actionTypes.SIGN_UP) {
          createNewUserData(
            response,
            name,
            email,
            password,
            address,
            city,
            postal,
            phone
          );
        }
        localStorage.setItem("userId", response.user.uid);
        localStorage.setItem("idToken", response.user.refreshToken);
        userId = response.user.uid;
      })
      .then((response) => {
        const userOrders = JSON.parse(localStorage.getItem("orders"));

        if (userOrders) {
          if (Object.keys(userOrders).length > 0) {
            Object.keys(userOrders).map((key) => {
              const orderData = userOrders[key];
              return firebase
                .database()
                .ref("users/" + response.user.uid + "/orders/")
                .push(orderData);
            });
          }
          localStorage.removeItem("orders");
        }
      })
      .then(() => {
        dispatch(authSuccess());
        dispatch({ type: globalActions.TOOLBAR_RENDER });
      })
      .catch((error) => {
        dispatch(authFail(error));
      })
      .finally(() => dispatch(fetchUserData(userId)));
  };
};

export default auth;
