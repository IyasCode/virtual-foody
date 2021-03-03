import React from "react";

// import binaryfoodyLogo from "../../assets/images/virtualfoody-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img
      src={
        "https://cdn.discordapp.com/attachments/791655883666620426/815224743077609522/virtualfoody-logo.png"
      }
      alt="this is virtual foody logo"
      style={props.style}
    />
  </div>
);

export default logo;
