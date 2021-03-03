import React from "react";

import image from "../../assets/images/burger-logo.png";
import classes from "./Image.module.css";

const burgerImage = (props) => {
  return <img src={image} alt="burger pic" className={classes.Image} />;
};

export default burgerImage;
