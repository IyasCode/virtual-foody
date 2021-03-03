import React from "react";

import classes from "./Pizza.module.css";
// import pizzaImage from "../../../assets/images/menu/menu-pizza.png";

const pizza = (props) => (
  <img
    className={classes.Pizza}
    src="https://scontent.fsin8-1.fna.fbcdn.net/v/t1.0-9/149993273_103405801807497_9011195631590299821_n.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=1ELKZBvZUbcAX9_AZzm&_nc_ht=scontent.fsin8-1.fna&oh=e9b49255aa509c36b848cf732fc11d54&oe=605E7362"
    alt="pizza"
  />
);

export default pizza;
