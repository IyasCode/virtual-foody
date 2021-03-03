import React from "react";

import classes from "./Beverage.module.css";
// import beverageImage from "../../../assets/images/menu/menu-beverage.png";

const beverage = (props) => (
  <img
    className={classes.Beverage}
    src="https://scontent.fsin8-1.fna.fbcdn.net/v/t1.0-9/153114011_103405818474162_8251230538284412315_n.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=DKPnVpI4jjoAX9coc7x&_nc_ht=scontent.fsin8-1.fna&oh=6fb8143d55dd99a536171135cfe45a0e&oe=605DFEF3"
    alt="beverage"
  />
);

export default beverage;
