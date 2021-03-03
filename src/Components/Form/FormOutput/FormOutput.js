import React from "react";

import classes from "./FormOutput.module.css";
// import formBackground from "../../../assets/images/auth-background.png";

const formOutput = (props) => {
  return (
    <div className={classes.SignInOutput}>
      <div className={classes.Header}>
        <img
          className={classes.Background}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815221450545168444/auth-background.png"
          }
          alt="background"
        />
        <h1 className={classes.Title}>Virtual Foody</h1>
      </div>
      {props.children}
    </div>
  );
};

export default formOutput;
