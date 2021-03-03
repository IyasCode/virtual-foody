import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";
// import backArrowImg from "../../../assets/images/back-arrow.png";

const Toolbar = (props) => {
  const url = window.location.pathname;
  const globalDispatch = useDispatch();
  const toolbarRender = useSelector((state) => state.global.toolbarRender);

  useEffect(() => {}, [toolbarRender]);

  let logoFlip;

  let logoRotate = [classes.Logo, classes.LogoRotate].join(" ");
  let backArrowRotate = [classes.BackArrow, classes.BackArrowRotate].join(" ");

  if (
    url === "/menu/beverage" ||
    url === "/menu/burger" ||
    url === "/menu/pizza"
  ) {
    logoFlip = true;
  } else {
    logoFlip = false;
  }

  return (
    <header className={classes.Toolbar}>
      <div className={classes.MobileOnly}>
        <Menu menuClicked={props.menuClicked} />
      </div>
      <div className={classes.LogoBox}>
        <div className={logoFlip ? logoRotate : classes.Logo}>
          <Logo />
        </div>
        <Link
          className={logoFlip ? backArrowRotate : classes.BackArrow}
          to="/menu"
          onClick={() => globalDispatch({ type: "TOOLBAR_RENDER" })}
        >
          <img
            className={classes.BackArrow_Image}
            src={
              "https://cdn.discordapp.com/attachments/791655883666620426/815224514371387402/back-arrow.png"
            }
            alt="back arrow"
          />
        </Link>

        <h1 className={classes.LogoText}>Virtual Foody</h1>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems
          id={props.id}
          logOutClicked={props.logOutClicked}
          active={props.active}
          navClicked={props.navClicked}
        />
      </nav>
    </header>
  );
};

export default Toolbar;
