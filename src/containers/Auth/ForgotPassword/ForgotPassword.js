import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Firebase from "firebase/app";
import "firebase/auth";

import FormOutput from "../../../Components/Form/FormOutput/FormOutput";
import ForgotPasswordForm from "../../../Components/Form/ForgotPasswordForm/ForgotPasswordForm";
import * as globalActions from "../../../globalStore/actions/globalActions";
import ForgotPasswordStatusCard from "../../../Components/UI/ForgotPasswordStatusCard/ForgotPasswordStatusCard";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [statusCard, setStatusCard] = useState(false);
  const [statusType, setStatusType] = useState(false);
  const [failedCode, setFailedCode] = useState("");
  const [error, setError] = useState("");
  const globalDispatch = useDispatch();

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    if (email.length > 0) {
      globalDispatch({ type: globalActions.LOADING });
      Firebase.auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setStatusCard(true);
          setStatusType(true);
        })
        .catch((error) => {
          setStatusCard(true);
          setStatusType(false);
          setFailedCode(error.code.split("/")[1]);
          setError(`Error: ${error.message}`);
        })
        .finally(() => globalDispatch({ type: globalActions.LOADING }));
    } else {
      setStatusCard(true);
      setStatusType(false);
      setFailedCode("invalid-email");
      setError("Error: Please enter an email");
    }
  };

  const cancelOnClickHandler = () => {
    setStatusCard(false);
    setEmail("");
  };

  return (
    <FormOutput>
      {statusCard ? (
        <ForgotPasswordStatusCard
          statusType={statusType}
          failedCode={failedCode}
          error={error}
          cancelOnClick={cancelOnClickHandler}
        />
      ) : (
        <ForgotPasswordForm
          onChange={onChangeHandler}
          submitClicked={submitClickHandler}
        />
      )}
    </FormOutput>
  );
};

export default ForgotPassword;
