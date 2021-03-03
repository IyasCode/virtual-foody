import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "remote-redux-devtools";
import firebase from "firebase/app";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import signUpReducer from "./containers/Auth/store/reducer/signUpReducer";
import authReducer from "./containers/Auth/store/reducer/authReducer";
import userReducer from "./userStore/reducer/userReducer";
import globalReducer from "./globalStore/reducer/reducer";

// Initialize Firebase

const firebaseConfig = {
  // firebase key
};

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  user: userReducer,
  global: globalReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  // composeWithDevTools({
  //   realtime: true,
  //   hostname: "localhost",
  //   port: 3000,
  // }) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
