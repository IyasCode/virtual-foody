import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./SignInForm.module.css";
import Input from "../../Input/Input";
import InputAlert from "../../Input/InputAlert/InputAlert";
import * as inputType from "../../Input/InputTypes/InputTypes";
import Loading from "../../../Components/UI/Loading/Loading";
import Aux from "../../../hoc/Auxileries";

const SignInForm = (props) => {
  const loading = useSelector((state) => state.auth.loading);

  return (
    <form className={classes.SignInForm}>
      {loading ? (
        <Loading marginTop="30px" marginBottom="30px" />
      ) : (
        <Aux>
          <h2 className={classes.SignIn_Text}>Sign-In</h2>
          <Input
            as={inputType.email}
            placeholder="Email"
            name={inputType.email}
            className={classes.Email}
            onChange={props.onChange}
            value={props.emailValue}
          />
          <Input
            as={inputType.password}
            placeholder="Password"
            name={inputType.password}
            className={classes.Password}
            onChange={props.onChange}
          />
          <InputAlert style={props.alert}>Invalid input! try again</InputAlert>
          <div className={classes.ButtonBox}>
            <NavLink to="/sign-in/forgot-password" className={classes.Link}>
              forgot password?
            </NavLink>
            <button
              className={classes.SignInButton}
              onClick={props.signInClicked}
            >
              Sign-In
            </button>
          </div>
          <h4 className={classes.Footer}>
            New to Virtual Foody?{" "}
            <NavLink to="/sign-up" className={classes.Link}>
              create account
            </NavLink>{" "}
            now
          </h4>
        </Aux>
      )}
    </form>
  );
};

export default SignInForm;
