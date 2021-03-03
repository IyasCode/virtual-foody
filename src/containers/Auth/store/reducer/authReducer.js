import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  id: null,
  error: null,
  loading: null,
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: localStorage.getItem("idToken"),
    id: localStorage.getItem("userId"),
    loading: false,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const logOut = (state, action) => {
  return {
    ...state,
    token: null,
    id: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.LOGOUT:
      return logOut(state, action);
    default:
      break;
  }

  return state;
};

export default reducer;
