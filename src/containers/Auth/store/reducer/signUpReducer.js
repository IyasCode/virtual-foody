import * as actionTypes from "../actions/actionTypes";
import * as inputTypes from "../../../../Components/Input/InputTypes/InputTypes";
import validateEmail from "../../../../utilities/validateEmail/validateEmail";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    confirm: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
  },
  check: {
    name: true,
    email: true,
    password: true,
    confirm: true,
    address: true,
    city: true,
    postal: true,
    phone: true,
  },
};

const onChange = (state, action) => {
  const newState = { ...state };
  const newUser = { ...state.user };
  const getName = action.event.target.name;
  const getValue = action.event.target.value;

  switch (getName) {
    case inputTypes.name:
      newUser.name = getValue;
      break;
    case inputTypes.email:
      newUser.email = getValue;
      break;
    case inputTypes.password:
      newUser.password = getValue;
      break;
    case inputTypes.confirm:
      newUser.confirm = getValue;
      break;
    case inputTypes.address:
      newUser.address = getValue;
      break;
    case inputTypes.city:
      newUser.city = getValue;
      break;
    case inputTypes.postal:
      newUser.postal = getValue;
      break;
    case inputTypes.phone:
      newUser.phone = getValue;
      break;

    default:
      break;
  }

  return {
    ...newState,
    user: { ...newUser },
  };
};

const OnCheck = (state, action) => {
  const newState = { ...state };
  const newCheck = { ...state.check };
  const newUser = { ...state.user };

  newCheck.name = newUser.name.length > 0 ? true : false;
  newCheck.email = validateEmail(newUser.email);
  newCheck.password = newUser.password > 5 ? true : false;
  newCheck.confirm = newUser.password === newUser.confirm ? true : false;
  newCheck.phone = newUser.phone.length >= 10 ? true : false;

  return {
    ...newState,
    check: { ...newCheck },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_CHANGE:
      return onChange(state, action);
    case actionTypes.SIGN_UP_ON_CHECK:
      return OnCheck(state, action);
    default:
      break;
  }

  return state;
};

export default reducer;
