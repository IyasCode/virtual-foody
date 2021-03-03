import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormOutput from "../../../Components/Form/FormOutput/FormOutput";
import SignInForm from "../../../Components/Form/SignInForm/SignInForm";
import useLocalStorage from "../../../utilities/localStorage/useLocalStorage";
import * as actionTypes from "../store/actions/actionTypes";
import * as actions from "../store/actions/auth";
import * as inputTypes from "../../../Components/Input/InputTypes/InputTypes";

const SignIn = (props) => {
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useState("");
  const globalDispatch = useDispatch();

  useEffect(() => {
    if (auth.id) {
      props.history.replace({
        pathname: "/menu",
      });
    }
  }, [auth.id, props]);

  const onChangeHandler = (event) => {
    if (event.target.name === inputTypes.email) {
      setEmail(event.target.value);
    }
    if (event.target.name === inputTypes.password) {
      setPassword(event.target.value);
    }
  };

  const signInClickHandler = (event) => {
    event.preventDefault();
    globalDispatch(actions.auth(email, password, actionTypes.SIGN_IN));
  };

  const invalidInput = {
    visibility: "visible",
    width: "82%",
    margin: "auto",
  };

  return (
    <FormOutput>
      <SignInForm
        onChange={onChangeHandler}
        signInClicked={signInClickHandler}
        alert={auth.error ? invalidInput : null}
        emailValue={email}
      />
    </FormOutput>
  );
};

export default SignIn;
