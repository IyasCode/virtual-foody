import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import BeveragePicker from "./containers/BeveragePicker/BeveragePicker";
import Checkout from "./containers/Checkout/Checkout";
import Menu from "./containers/Menu/Menu";
import SignIn from "./containers/Auth/SignIn/SignIn";
import SignUp from "./containers/Auth/SignUp/SignUp";
import UserOrders from "./containers/UserOrders/UserOrders";
import UserProfile from "./containers/UserProfile/UserProfile";
import Home from "./containers/Home/Home";
import ForgotPassword from "./containers/Auth/ForgotPassword/ForgotPassword";
import Layout from "./Components/Layout/Layout";
import Recipe from "./containers/Recipe/Recipe";
// import AsyncComponent from "./hoc/AsyncComponent";
import { authSuccess } from "./containers/Auth/store/actions/auth";
import { fetchUserData } from "./userStore/action/fetchUserData";

// const asyncBeveragePickerComponent = AsyncComponent(() => {
//   return import("./containers/BeveragePicker/BeveragePicker");
// });

// const asyncBurgerBuilderComponent = AsyncComponent(() => {
//   return import("./containers/BurgerBuilder/BurgerBuilder");
// });

// const asyncPizzaBuilderComponent = AsyncComponent(() => {
//   return import("./containers/PizzaBuilder/PizzaBuilder");
// });

// const asyncMenuComponent = AsyncComponent(() => {
//   return import("./containers/Menu/Menu");
// });

// const asyncUserProfileComponent = AsyncComponent(() => {
//   return import("./containers/UserProfile/UserProfile");
// });

// const asyncCheckoutComponent = AsyncComponent(() => {
//   return import("./containers/Checkout/Checkout");
// });

// const asyncUserOrdersComponent = AsyncComponent(() => {
//   return import("./containers/UserOrders/UserOrders");
// });

// const asyncForgotPasswordComponent = AsyncComponent(() => {
//   return import("./containers/Auth/ForgotPassword/ForgotPassword");
// });

// const asyncSignInComponent = AsyncComponent(() => {
//   return import("./containers/Auth/SignIn/SignIn");
// });

// const asyncSignUpComponent = AsyncComponent(() => {
//   return import("./containers/Auth/SignUp/SignUp");
// });

// const asyncHomeComponent = AsyncComponent(() => {
//   return import("./containers/Home/Home");
// });

const App = (props) => {
  const [userId, setUserId] = useState();
  const globalDispatch = useDispatch();

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    if (userId) {
      globalDispatch(authSuccess());
      globalDispatch(fetchUserData(userId));
    }
  }, [userId, globalDispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/menu/beverage" component={BeveragePicker} />
        <Route path="/menu/burger" component={BurgerBuilder} />
        <Route path="/menu/pizza" component={PizzaBuilder} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/my-order/checkout" component={Checkout} />
        <Route path="/my-order" component={UserOrders} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/sign-in/forgot-password" component={ForgotPassword} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/" component={Home} />
        {/* <Redirect from="/" to="/burger-builder" /> */}
      </Switch>
    </Layout>
  );
};

export default App;
