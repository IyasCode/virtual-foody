import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link
        to={props.link}
        className={props.active ? classes.active : null}
        onClick={props.navClicked}
        style={props.style}
      >
        {props.children}
      </Link>
      {/* <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a> */}
    </li>
  );
};

export default navigationItem;
