import React from "react";
import { useSelector } from "react-redux";

import classes from "./GuestCheckout.module.css";
import Button from "../../UI/Button/Button";

const GuestCheckout = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <section className={classes.GuestCheckout}>
      {auth.id ? (
        <>
          <h2>Dummy Text:</h2>
          <p>This is just another dummy app.</p>
          <div className={classes.ButtonBox}>
            <div className={classes.Button}>
              <Button buttonType="Danger" clicked={props.cancelOnClick}>
                Cancel
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Verification:</h2>
          <p>Sign-in is require in order to checkout.</p>
          <div className={classes.ButtonBox}>
            <div className={classes.Button}>
              <Button buttonType="Success" clicked={props.signInOnClick}>
                Sign-in
              </Button>
            </div>

            <div className={classes.Button}>
              <Button buttonType="Danger" clicked={props.cancelOnClick}>
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default GuestCheckout;
