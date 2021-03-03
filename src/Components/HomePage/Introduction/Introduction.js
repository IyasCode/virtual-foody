import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Introduction.module.css";
import AdScreen from "../../AdScreen/AdScreen";
import Particles from "../../../Components/HomePage/Particles/Particles";
// import stallTable from "../../../assets/images/homePage/stall-table.png";
// import botPicture from "../../../assets/images/homePage/bot-picture.png";
import * as globalActions from "../../../globalStore/actions/globalActions";

const Introduction = (props) => {
  const globalDispatch = useDispatch();
  const noSignal = useSelector((state) => state.global.noSignal);

  const classBotImg = [classes.BotPicture, classes.BotPictureAnimation].join(
    " "
  );

  return (
    <section className={classes.Introduction}>
      <Particles />
      {/* <img
        className={classes.IntroductionBackground}
        src={introductionBackground}
        alt="introduction background"
      /> */}
      <div className={classes.InfoBox}>
        <header className={classes.InfoBox_Header}>
          <p className={classes.InfoBox_Header_Welcome}>welcome to</p>
          <h1 className={classes.InfoBox_Header_Title}>Virtual Foody</h1>
        </header>
        <p className={classes.InfoBox_Text}>
          We provide the MOST healthiest fast food on the planet, our
          ingredients are organicly made with digital which have 0% chance to
          affect your health... So, what are you waiting for?
        </p>
        <button
          className={classes.InfoBox_Button}
          onClick={() => globalDispatch({ type: globalActions.TOOLBAR_RENDER })}
        >
          <Link className={classes.InfoBox_Button_Link} to="/menu">
            Check out our menu!
          </Link>
        </button>
      </div>
      <img
        className={noSignal ? classBotImg : classes.BotPicture}
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815223300052877342/bot-picture.png"
        }
        alt="bot"
      />
      <img
        className={classes.StallTable}
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815223306440409088/stall-table.png"
        }
        alt="stall table"
      />
      <AdScreen />
    </section>
  );
};

export default Introduction;
