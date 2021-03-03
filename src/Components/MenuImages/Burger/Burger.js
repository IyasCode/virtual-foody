import React from "react";

import classes from "./Burger.module.css";
// import burgerImage from "../../../assets/images/menu/menu-burger.png";

const burger = (props) => (
  <img
    className={classes.Burger}
    src="https://scontent.fsin8-2.fna.fbcdn.net/v/t1.0-9/153198356_103405808474163_3780384531408864191_n.jpg?_nc_cat=106&ccb=3&_nc_sid=0debeb&_nc_ohc=ZhW1561gZ88AX-rJrn0&_nc_ht=scontent.fsin8-2.fna&oh=3de425382984b3625d14828754a70d00&oe=605EA6B9"
    alt="burger"
  />
);

export default burger;
