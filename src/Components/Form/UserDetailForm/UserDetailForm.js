import React from "react";

import classes from "./UserDetailForm.module.css";
import Input from "../../Input/Input";
import * as inputType from "../../Input/InputTypes/InputTypes";
import InputAlert from "../../Input/InputAlert/InputAlert";

const userDetailForm = (props) => {
  let attachClasses = [classes.UserDetailForm, classes.Close];
  if (props.slide) {
    attachClasses = [classes.UserDetailForm, classes.Open];
  }

  return (
    <form className={attachClasses.join(" ")}>
      <label className={classes.AddressLabel}>Address</label>
      <Input
        as={inputType.textArea}
        className={classes.AddressInput}
        name={inputType.address}
        onChange={props.onChange}
        placeholder="optianal..."
      />
      <InputAlert>Enter address</InputAlert>
      <div className={classes.TwoInputHolder}>
        <div className={classes.InputHolder}>
          <label className={classes.CityLabel}>City</label>
          <Input
            as={inputType.text}
            className={classes.CityInput}
            name={inputType.city}
            onChange={props.onChange}
            placeholder="optianal..."
          />
          <InputAlert>Enter city</InputAlert>
        </div>
        <div className={classes.InputHolder}>
          <label className={classes.PostalLabel}>Postal code</label>
          <Input
            as={inputType.number}
            className={classes.PostalInput}
            name={inputType.postal}
            onChange={props.onChange}
            placeholder="optianal..."
          />
          <InputAlert>Enter postal code</InputAlert>
        </div>
      </div>
      <label className={classes.PhoneLabel}>Phone number</label>
      <Input
        as={inputType.number}
        className={classes.PhoneInput}
        name={inputType.phone}
        onChange={props.onChange}
      />
      <InputAlert>Enter phone number</InputAlert>
      <div className={classes.ButtonHolder}>
        <button className={classes.Button} onClick={props.backClicked}>
          back
        </button>
        <button className={classes.Button} onClick={props.signUpClicked}>
          Sign-Up
        </button>
      </div>
    </form>
  );
};

export default userDetailForm;
