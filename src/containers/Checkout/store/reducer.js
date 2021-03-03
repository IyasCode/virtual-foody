import * as actions from "./actions";
import randomId from "../../../utilities/randomId/randomId";

const prizeCheck = (number) => {
  if (number >= 25 && number <= 68) {
    return 10;
  } else if (number >= 114 && number <= 158) {
    return 50;
  } else if (number >= 249 && number <= 293) {
    return 20;
  } else if (number >= 340 && number <= 383) {
    return 99;
  } else {
    return 0;
  }
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actions.SET_WHEEL_SPIN:
      const randomNum = Math.floor(Math.random() * 360) + 23;
      const setRotation = `rotateZ(${randomNum + 3600}deg)`;
      const newPercentage = prizeCheck(randomNum);

      if (newPercentage) {
        newState.promoCodeId = randomId(15);
        newState.promoSpinWon = true;
      }
      return {
        ...newState,
        wheelStyle: {
          transform: setRotation,
        },
        percentage: newPercentage,
        promoSpinComplete: true,
        spinClick: true,
      };
    case actions.PROMO_CODE_MATCH:
      return {
        ...newState,
        promoCodeAvailable: true,
      };
    case actions.ON_CHECKOUT:
      return {
        ...newState,
        checkoutScreen: !newState.checkoutScreen,
      };
    case actions.PROMO_CODE_CLICK:
      return {
        ...newState,
        promoCodeClick: true,
      };
    case actions.VALID_PROMO_CODE:
      return {
        ...newState,
        invalidPromoCode: false,
      };
    case actions.INVALID_PROMO_CODE:
      return {
        ...newState,
        invalidPromoCode: true,
      };
    default:
      return state;
  }
};

export default reducer;
