import React from "react";
import { Link } from "react-router-dom";

import Input from "../../Input/Input";
import * as inputTypes from "../../Input/InputTypes/InputTypes";
import InputAlert from "../../../Components/Input/InputAlert/InputAlert";
import classes from "./SignUpForm.module.css";
import { useSelector } from "react-redux";

const SignUpForm = (props) => {
  const check = useSelector((state) => state.signUp.check);

  let attachClasses = [classes.SignUpForm, classes.Close];
  if (props.slide) {
    attachClasses = [classes.SignUpForm, classes.Open];
  }

  const invalidInput = {
    visibility: "visible",
    width: "100%",
    margin: "auto",
  };

  return (
    <form className={attachClasses.join(" ")}>
      <h2 className={classes.SignUpText}>Sign-Up</h2>
      <Input
        as={inputTypes.text}
        name={inputTypes.name}
        placeholder="Name"
        className={classes.Name}
        onChange={props.onChange}
        value={props.value}
      />
      <InputAlert style={check.name ? null : invalidInput}>
        Enter name
      </InputAlert>
      <Input
        as={inputTypes.email}
        name={inputTypes.email}
        placeholder="Email"
        className={classes.Email}
        onChange={props.onChange}
      />
      <InputAlert style={check.email ? null : invalidInput}>
        Invalid Email
      </InputAlert>
      <Input
        as={inputTypes.password}
        name={inputTypes.password}
        placeholder="Password"
        className={classes.Password}
        onChange={props.onChange}
      />
      <InputAlert style={check.password ? null : invalidInput}>
        Password need to be atleast 6 characters
      </InputAlert>
      <Input
        as={inputTypes.password}
        name={inputTypes.confirm}
        placeholder="Confirm"
        className={classes.Confirm}
        onChange={props.onChange}
      />
      <InputAlert style={check.confirm ? null : invalidInput}>
        Confirm password is not match
      </InputAlert>
      <div className={classes.ButtonHolder}>
        <Link to="/sign-in" className={classes.SignInButton}>
          back to Sign-in
        </Link>
        <button className={classes.NextButton} onClick={props.nextClicked}>
          Next
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
