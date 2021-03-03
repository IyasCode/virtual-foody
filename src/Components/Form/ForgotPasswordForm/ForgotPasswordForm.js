import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./ForgotPasswordForm.module.css";
import Input from "../../Input/Input";
import * as inputType from "../../Input/InputTypes/InputTypes";
import Loading from "../../../Components/UI/Loading/Loading";
import Aux from "../../../hoc/Auxileries";

const FormPasswordForm = (props) => {
  const loading = useSelector((state) => state.global.loading);

  return (
    <form className={classes.ForgotPasswordForm}>
      {loading ? (
        <Loading marginTop="30px" marginBottom="30px" />
      ) : (
        <Aux>
          <h2 className={classes.ForgotPasswordForm_Text}>Forgot Password</h2>
          <Input
            as={inputType.email}
            placeholder="Email"
            name={inputType.email}
            className={classes.Email}
            onChange={props.onChange}
            value={props.emailValue}
          />
          <div className={classes.ButtonBox}>
            <button
              className={classes.SubmitButton}
              onClick={props.submitClicked}
            >
              Submit
            </button>
          </div>
          <h4 className={classes.Footer}>
            <NavLink to="/sign-in" className={classes.Link}>
              Sign-In
            </NavLink>{" "}
          </h4>
        </Aux>
      )}
    </form>
  );
};

export default FormPasswordForm;
