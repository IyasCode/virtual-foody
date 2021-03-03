import React from "react";
import { useSelector } from "react-redux";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  const auth = useSelector((state) => state.auth);
  const url = window.location.pathname;

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem
        link="/"
        active={url === "/" ? true : false}
        navClicked={props.navClicked}
      >
        Home
      </NavigationItem>
      <NavigationItem
        link="/menu"
        active={
          url === "/menu" ||
          url === "/menu/beverage" ||
          url === "/menu/burger" ||
          url === "/menu/pizza"
            ? true
            : false
        }
        navClicked={props.navClicked}
      >
        Menu
      </NavigationItem>

      <NavigationItem
        link="/my-order"
        active={
          url === "/my-order" || url === "/my-order/checkout" ? true : false
        }
        navClicked={props.navClicked}
      >
        My order
      </NavigationItem>

      {!auth.id ? (
        <NavigationItem
          link="/sign-in"
          active={url === "/sign-in" ? true : false}
          navClicked={props.navClicked}
        >
          Sign-In
        </NavigationItem>
      ) : (
        <li className={classes.UserBox}>
          <p
            className={
              url === "/profile" ? classes.UserTextActive : classes.UserText
            }
          >
            User
          </p>
          <ul className={classes.ProfileButton}>
            <NavigationItem link="/profile" navClicked={props.navClicked}>
              Profile
            </NavigationItem>
          </ul>
          <ul className={classes.LogOutButton}>
            <NavigationItem link="/sign-in" navClicked={props.logOutClicked}>
              Log-out
            </NavigationItem>
          </ul>
        </li>
      )}
    </ul>
  );
};

export default NavigationItems;
