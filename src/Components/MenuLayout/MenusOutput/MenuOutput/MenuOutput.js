import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MenuOutput.module.css";
import { StateContext } from "../../../../containers/Menu/Menu";

const MenuOutput = (props) => {
  const globalDispatch = useContext(StateContext);

  let style = {
    menuImage: null,
    menuType: null,
  };

  switch (props.to) {
    case "burger":
      style.menuImage = classes.Burger_MenuImage;
      style.menuType = classes.Burger_MenuType;
      break;
    case "beverage":
      style.menuImage = classes.Beverage_MenuImage;
      style.menuType = classes.Beverage_MenuType;
      break;
    case "pizza":
      style.menuImage = classes.Pizza_MenuImage;
      style.menuType = classes.Pizza_MenuType;
      break;
    default:
      break;
  }

  return (
    <NavLink
      to={"/menu/" + props.to}
      className={classes.Link}
      onClick={() => globalDispatch({ type: "TOOLBAR_RENDER" })}
    >
      <div className={classes.MenuOutput}>
        <div className={style.menuImage}>{props.menuOutputImage}</div>
        <h2 className={style.menuType}>{props.menuType}</h2>
      </div>
    </NavLink>
  );
};

export default MenuOutput;
