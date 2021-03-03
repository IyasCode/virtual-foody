import React from "react";

import classes from "./ForgotPasswordStatusCard.module.css";
// import cancelImg from "../../../assets/images/cancel.png";
// import correctImg from "../../../assets/images/correct.png";

const forgotPasswordStatusCard = (props) => {
  return (
    <div
      className={classes.ForgotPasswordStatusCard}
      onClick={props.cancelOnClick}
    >
      <img
        className={classes.Cancel}
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815224600450564126/cancel.png"
        }
        alt="cancel"
      />
      {props.statusType ? (
        <>
          <h2>Sent Successfully</h2>
          <h4>check your email for further instruction.</h4>
          <img
            className={classes.Correct}
            src={
              "https://cdn.discordapp.com/attachments/791655883666620426/815224637499506688/correct.png"
            }
            alt="correct"
          />
        </>
      ) : (
        <>
          <h3>{props.failedCode}</h3>
          <h5>{props.error}</h5>
        </>
      )}
    </div>
  );
};

export default forgotPasswordStatusCard;
