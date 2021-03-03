import React from "react";

import classes from "./Home.module.css";
// import howItWorkPictureDesktop from "../../assets/images/homePage/howitwork-desktop.png";
import Introduction from "../../Components/HomePage/Introduction/Introduction";
import Footer from "../../Components/HomePage/Footer/Footer";

const Home = (props) => {
  return (
    <main className={classes.Home}>
      <Introduction />
      <section className={classes.HowItWork}>
        <h2 className={classes.HowItWork_Title}>
          How does Virtual Foody work?
        </h2>
        <img
          className={classes.HowItWork_Picture_Desktop}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815223307115823204/howitwork-desktop.png"
          }
          alt="How it work explanation"
        />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
