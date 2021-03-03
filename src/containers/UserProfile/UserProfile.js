import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import crypto from "crypto";

import ProfileSummary from "../../Components/ProfileSummary/ProfileSummary";
import Aux from "../../hoc/Auxileries";
import * as actions from "./store/actions";
import userProfileState from "./store/state";
import reducer from "./store/reducer";
import Loading from "../../Components/UI/Loading/Loading";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import randomAlphabet from "../../utilities/math/randomAlphabet";
import passwordCheck from "../../utilities/math/passwordCheck";
import * as inputTypes from "../../Components/Input/InputTypes/InputTypes";

export const StateContext = React.createContext();

const UserProfile = (props) => {
  const [state, dispatch] = useReducer(reducer, userProfileState);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const globalDispatch = useDispatch();

  useEffect(() => {
    if (user.details) {
      dispatch({ type: actions.SET_USER_PROFILE, user: user.details });
    }
  }, [user.details]);

  useEffect(() => {}, [state]);

  state.onChange = (event) => {
    dispatch({
      type: actions.ON_CHANGE,
      target: event.target,
      user: user.details,
    });
  };

  state.nameChangeClickHandler = () => {
    if (state.inputName) {
      dispatch({ type: actions.NAME_LOADING });
      firebase
        .database()
        .ref("users/" + auth.id + "/details/name")
        .set(state.inputName)
        .then(() => dispatch({ type: actions.NAME_NEW_VALUE }))
        .then(() => dispatch({ type: actions.NAME_LOADING }))
        .catch((error) => console.log("syncronization failed"));
    }
  };

  state.othersChangeClickHandler = () => {
    if (
      user.details.address !== state.user.address ||
      user.details.city !== state.user.city ||
      user.details.postal !== state.user.postal ||
      user.details.phone !== state.user.phone
    ) {
      dispatch({ type: actions.OTHERS_LOADING });
      firebase
        .database()
        .ref("users/" + auth.id + "/details/")
        .set(state.user)
        .then(() => globalDispatch(fetchUserData(auth.id, true)))
        .then(() => dispatch({ type: actions.OTHERS_LOADING }))
        .then(() => dispatch({ type: actions.SET_BUTTON_DISABLED }))
        .catch((error) => console.log("syncronization failed"));
    } else {
      dispatch({ type: actions.SET_BUTTON_DISABLED });
    }
  };

  state.passwordUpdateHandler = () => {
    dispatch({ type: actions.SET_PASSWORD_UPDATE_STATUS });
    if (passwordCheck(state.password.current, user.details.password)) {
      if (state.password.new === state.password.confirm) {
        if (state.password.new.split("").length > 5) {
          dispatch({ type: actions.PASSWORD_LOADING });
          const hashPassword = crypto
            .createHmac("sha256", randomAlphabet())
            .update(state.password.new)
            .digest("hex");

          firebase
            .database()
            .ref("users/" + auth.id + "/details/password/")
            .set(hashPassword)
            .then(() =>
              firebase
                .auth()
                .currentUser.updatePassword(state.password.new)
                .catch((error) => {})
                .finally(() => {
                  dispatch({
                    type: actions.SET_ERROR,
                    error: null,
                    status: true,
                    name: inputTypes.password,
                  });
                  globalDispatch(fetchUserData(auth.id, true));
                })
            )
            .catch((error) => {})
            .finally(() => dispatch({ type: actions.PASSWORD_LOADING }));
        } else {
          dispatch({
            type: actions.SET_ERROR,
            error: "Error: password should be atleast 6 characters",
            status: false,
            name: inputTypes.password,
          });
        }
      } else {
        dispatch({
          type: actions.SET_ERROR,
          error: "Error: new password and confirm password are not match",
          status: false,
          name: inputTypes.password,
        });
      }
    } else {
      dispatch({
        type: actions.SET_ERROR,
        error: "Error: wrong current password",
        status: false,
        name: inputTypes.password,
      });
    }
  };

  state.updateStatusCancelHandler = () => {
    dispatch({ type: actions.CANCEL_UPDATE_STATUS });
  };

  return (
    <StateContext.Provider value={state}>
      <Aux>
        {user.details ? <ProfileSummary /> : <Loading marginTop="150px" />}
      </Aux>
    </StateContext.Provider>
  );
};

export default UserProfile;
