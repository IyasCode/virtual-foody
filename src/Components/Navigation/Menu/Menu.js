import React from "react";
import classes from "./Menu.module.css";
// import NavIcon from "../../../assets/images/nav-icon.png";

const menu = (props) => (
  <div className={classes.Menu} onClick={props.menuClicked}>
    <img
      src={
        "https://cdn.discordapp.com/attachments/791655883666620426/815225601333526528/nav-icon.png"
      }
      alt="the navigation icon"
    />
  </div>
);

export default menu;
