import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";

import classes from "./UserOrders.module.css";
import UserOrdersSummary from "../../Components/UserOrdersSummary/UserOrdersSummary";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import Loading from "../../Components/UI/Loading/Loading";

import Aux from "../../hoc/Auxileries";

const Checkout = (props) => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.global.loading);
  const [userOrders, setUserOrders] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);
  const globalDispatch = useDispatch();

  let UserOrdersSummaries = null;
  let checkUserOrders = false;

  useEffect(() => {
    if (localStorage.getItem("orders")) {
      if (auth.id) {
        setUserOrders(user.orders);
      } else {
        setUserOrders(JSON.parse(localStorage.getItem("orders")));
      }
    }
    setLocalLoading(false);
  }, [user.orders, auth.id]);

  const renderToolbarHandler = () => {
    globalDispatch({ type: "TOOLBAR_RENDER" });
  };

  const deleteButtonHandler = (id, index) => {
    if (auth.id) {
      firebase
        .database()
        .ref("users/" + auth.id + "/orders/")
        .child(id)
        .remove()
        .then(() => globalDispatch(fetchUserData(auth.id)));
    } else {
      const newUserOrders = { ...userOrders };
      delete newUserOrders[id];
      setUserOrders(newUserOrders);
      localStorage.setItem("orders", JSON.stringify(newUserOrders));
      if (
        Object.keys(JSON.parse(localStorage.getItem("orders"))).length === 0
      ) {
        localStorage.setItem("orders", null);
      }
    }
  };

  const checkoutButtonHandler = () => {
    props.history.replace({
      pathname: "/my-order/checkout",
    });
  };

  if (userOrders) {
    if (Object.keys(userOrders).length > 0) {
      checkUserOrders = true;
    }

    if (!localLoading) {
      UserOrdersSummaries = Object.keys(userOrders).map((key, index) => {
        const userOrder = userOrders[key];
        return (
          <UserOrdersSummary
            key={key}
            id={key}
            orderTag={index + 1}
            userOrder={userOrder}
            deleteButton={deleteButtonHandler}
          />
        );
      });
    }
  }

  return loading ? (
    <Loading marginTop="100px" />
  ) : (
    <Aux>
      <section className={classes.Checkout}>
        <main className={classes.CheckoutSummaries}>{UserOrdersSummaries}</main>
        {checkUserOrders || JSON.parse(localStorage.getItem("orders")) ? (
          <footer className={classes.Footer}>
            <NavLink
              to="/menu"
              className={classes.Link}
              onClick={renderToolbarHandler}
            >
              <div className={classes.AddButton}>ADD</div>
            </NavLink>

            <button
              className={classes.CheckoutButton}
              onClick={checkoutButtonHandler}
            >
              CONTINUE
            </button>
          </footer>
        ) : localLoading ? null : (
          <div className={classes.EmptyOrderList}>
            <p className={classes.EmptyOrderList_Text}>
              Your order list is empty...
            </p>
            <NavLink
              to="/menu"
              className={classes.Link}
              onClick={renderToolbarHandler}
            >
              <div className={classes.EmptyOrderList_Button}>
                Start order now!
              </div>
            </NavLink>
          </div>
        )}
      </section>
    </Aux>
  );
};

export default Checkout;
