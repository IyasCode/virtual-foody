import React from "react";

import classes from "./updateStatusCard.module.css";
// import cancelImg from "../../../assets/images/cancel.png";
// import correctImg from "../../../assets/images/correct.png";

const updateStatusCard = (props) => {
  return (
    <div className={classes.UpdateStatusCard} onClick={props.cancelOnClick}>
      <img
        className={classes.Cancel}
        src={
          "https://cdn.discordapp.com/attachments/791655883666620426/815224600450564126/cancel.png"
        }
        alt="cancel"
      />
      {props.type ? (
        <>
          <h2>Update Succseed</h2>
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
          <h3>UPDATE FAILED</h3>
          <h5>{props.error}</h5>
        </>
      )}
    </div>
  );
};

export default updateStatusCard;
