import React from "react";

import classes from "./Footer.module.css";

const footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <section className={classes.Count}>
        <p className={classes.Count_Text}>Delivery done to uploaded people</p>
        <p className={classes.Count_Number}>1,021,638</p>
      </section>
      <h3 className={classes.Copyright}>COPYRIGHT © 2431 ALL RIGHT RESERVED</h3>
    </footer>
  );
};

export default footer;
