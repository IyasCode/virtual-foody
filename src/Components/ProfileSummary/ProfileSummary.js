import React, { useContext } from "react";
import { useSelector } from "react-redux";

import classes from "./ProfileSummary.module.css";
import Loading from "../UI/Loading/Loading";
import { StateContext } from "../../containers/UserProfile/UserProfile";
import * as inputTypes from "../Input/InputTypes/InputTypes";
import UpdateStatusCard from "../UI/UpdateStatusCard/updateStatusCard";

const ProfileSummary = (props) => {
  const state = useContext(StateContext);
  const user = state.user;
  const auth = useSelector((state) => state.auth);

  const loadingBackground = "rgb(241, 241, 241)";

  return (
    <>
      {user && auth ? (
        <section className={classes.ProfileSummary}>
          <div className={classes.Box1}>
            <div className={classes.Summary1}>
              {state.loading.name ? (
                <Loading
                  width="124px"
                  height="124px"
                  background={loadingBackground}
                />
              ) : (
                <>
                  <span>Name: {user.name}</span>
                  <div>
                    <input
                      placeholder="change name"
                      onChange={state.onChange}
                      name={inputTypes.name}
                    />
                    <button
                      onClick={state.nameChangeClickHandler}
                      disabled={state.buttonDisabled.name}
                    >
                      update
                    </button>
                  </div>
                  <p>
                    <span>Email: {user.email}</span>
                    <span>Id &nbsp; &nbsp; &nbsp;: {auth.id}</span>
                  </p>
                </>
              )}
            </div>
            <div className={classes.Summary2}>
              {state.loading.password ? (
                <Loading
                  background={loadingBackground}
                  width="150px"
                  height="210px"
                  marginTop="22px"
                />
              ) : state.updateStatus.password ? (
                <div className={classes.UpdateStatusPassword}>
                  <UpdateStatusCard
                    type={state.passwordStatus}
                    error={state.error}
                    cancelOnClick={state.updateStatusCancelHandler}
                  />
                </div>
              ) : (
                <>
                  <h2>Update Password</h2>
                  <input
                    placeholder="Current Password"
                    name={inputTypes.currentPassword}
                    onChange={state.onChange}
                    value={state.password.current}
                  />
                  <input
                    placeholder="New Password"
                    name={inputTypes.newPassword}
                    onChange={state.onChange}
                    value={state.password.new}
                  />
                  <input
                    placeholder="Confirm Password"
                    name={inputTypes.confirmPassword}
                    onChange={state.onChange}
                    value={state.password.confirm}
                  />
                  <button
                    disabled={state.buttonDisabled.password}
                    onClick={state.passwordUpdateHandler}
                  >
                    update
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={classes.Box2}>
            <div className={classes.Box2_Inner}>
              {state.loading.others ? (
                <Loading background={loadingBackground} height="410px" />
              ) : (
                <>
                  <div className={classes.Address}>
                    <h3>Address:</h3>
                    <textarea
                      className={classes.Address_Input}
                      value={user.address ? user.address : ""}
                      name={inputTypes.address}
                      onChange={state.onChange}
                    />
                  </div>
                  <div className={classes.City}>
                    <h3>City:</h3>
                    <input
                      value={user.city ? user.city : ""}
                      name={inputTypes.city}
                      onChange={state.onChange}
                    />
                  </div>
                  <div className={classes.Postal}>
                    <h3>Postal:</h3>
                    <input
                      type={inputTypes.number}
                      value={user.postal ? user.postal : ""}
                      name={inputTypes.postal}
                      onChange={state.onChange}
                    />
                  </div>
                  <div className={classes.Phone}>
                    <h3>Phone:</h3>
                    <input
                      type={inputTypes.number}
                      value={user.phone ? user.phone : ""}
                      name={inputTypes.phone}
                      onChange={state.onChange}
                    />
                  </div>
                  <button
                    onClick={state.othersChangeClickHandler}
                    disabled={state.buttonDisabled.others}
                  >
                    update
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loading marginTop="150px" />
      )}
    </>
  );
};

export default ProfileSummary;
