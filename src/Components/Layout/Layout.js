import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Auxileries";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { logOut } from "../../containers/Auth/store/actions/auth";
import * as userActions from "../../userStore/action/actionTypes";
import LiveBackground from "../LiveBackground/LiveBackground";

class Layout extends Component {
  state = {
    showSideDraw: false,
    justRender: true,
  };

  componentDidMount() {
    // axios
    //   .get("https://instantania-5afea.firebaseio.com/order")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const rootRef = firebase.database().ref().child("order");
    // const orderRef = rootRef.child("meat");
    // rootRef.on("value", (snap) => {
    //   console.log(snap.val());
    // });
  }

  sideDrawHandler = () => {
    const reverse = this.state.showSideDraw;
    this.setState({ showSideDraw: !reverse });
  };

  active = () => {
    this.setState({ justRender: !this.state.justRender });
  };

  render() {
    return (
      <Aux>
        <LiveBackground />
        <section className={classes.Body}>
          <Toolbar
            menuClicked={this.sideDrawHandler}
            id={this.props.id}
            logOutClicked={this.props.onLogOut}
            navClicked={this.active}
          />
          <SideDrawer
            open={this.state.showSideDraw}
            closed={this.sideDrawHandler}
            navClicked={this.sideDrawHandler}
          />
          <main className={classes.Content}>{this.props.children}</main>
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(logOut());
      dispatch({ type: userActions.CLEAR_USER_DATA });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
