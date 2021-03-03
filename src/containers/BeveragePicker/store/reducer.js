import * as actions from "./actions";

const reducer = (state, action) => {
  const newState = { ...state };
  const newBeverages = JSON.parse(JSON.stringify(state.beverages));

  let newChosenBeverage;
  for (let beverage of newBeverages) {
    if (beverage[0] === action.beverage) {
      newChosenBeverage = beverage;
    }
  }

  switch (action.type) {
    case actions.ORDER:
      return {
        ...newState,
        chosenBeverage: newChosenBeverage,
        orderClick: !newState.orderClick,
      };
    case actions.ORDER_CANCEL:
      return {
        ...newState,
        orderClick: !newState.orderClick,
      };
    default:
      return state;
  }
};

export default reducer;
