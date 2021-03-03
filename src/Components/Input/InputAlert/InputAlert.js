import React from "react";

import classes from "./InputAlert.module.css";
// import alertImg from "../../../assets/images/alert.png";

const inputAlert = (props) => {
  return (
    <div className={classes.InputAlert} style={props.style}>
      <img
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815224559309291551/alert.png"
        }
        className={classes.AlertLogo}
        alt="alert"
      />
      <p className={classes.AlertText}>{props.children}</p>
    </div>
  );
};

export default inputAlert;
