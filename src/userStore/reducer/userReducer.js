import * as actionTypes from "../action/actionTypes";

const initialState = {
  details: null,
  orders: null,
};

const fetchUserDetails = (state, action) => {
  return {
    ...state,
    details: action.details,
  };
};

const fetchUserOrders = (state, action) => {
  return {
    ...state,
    orders: action.orders,
  };
};

const clearUserData = (state, action) => {
  return {
    ...state,
    details: null,
    orders: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_DETAILS:
      return fetchUserDetails(state, action);
    case actionTypes.FETCH_USER_ORDERS:
      return fetchUserOrders(state, action);
    case actionTypes.CLEAR_USER_DATA:
      return clearUserData(state, action);
    default:
      return state;
  }
};

export default reducer;
