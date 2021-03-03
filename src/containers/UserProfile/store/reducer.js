import * as actions from "./actions";
import * as inputTypes from "../../../Components/Input/InputTypes/InputTypes";

const resetPassword = {
  current: "",
  new: "",
  confirm: "",
};

const Reducer = (state, action) => {
  const newState = { ...state };
  const newUser = { ...newState.user };
  const newLoading = { ...newState.loading };
  const newButtonDisabled = { ...newState.buttonDisabled };
  const newPassword = { ...newState.password };
  const newUpdateStatus = { ...newState.updateStatus };

  switch (action.type) {
    case actions.SET_USER_PROFILE:
      return {
        ...newState,
        user: {
          ...newUser,
          name: action.user.name,
          email: action.user.email,
          password: action.user.password,
          address: action.user.address,
          city: action.user.city,
          postal: action.user.postal,
          phone: action.user.phone,
        },
      };

    case actions.ON_CHANGE:
      const newValue = action.target.value;
      const targetName = action.target.name;

      switch (targetName) {
        case inputTypes.name:
          newState.inputName = newValue;
          break;
        case inputTypes.address:
          newUser.address = newValue;
          break;
        case inputTypes.city:
          newUser.city = newValue;
          break;
        case inputTypes.postal:
          newUser.postal = newValue;
          break;
        case inputTypes.phone:
          newUser.phone = newValue;
          break;
        case inputTypes.currentPassword:
          newPassword.current = newValue;
          break;
        case inputTypes.newPassword:
          newPassword.new = newValue;
          break;
        case inputTypes.confirmPassword:
          newPassword.confirm = newValue;
          break;
        default:
          break;
      }
      if (targetName === inputTypes.name) {
        if (newState.inputName) {
          newButtonDisabled.name = false;
        } else {
          newButtonDisabled.name = true;
        }
      } else {
        if (
          newUser.address === action.user.address &&
          newUser.city === action.user.city &&
          newUser.postal === action.user.postal &&
          newUser.phone === action.user.phone
        ) {
          newButtonDisabled.others = true;
        } else {
          newButtonDisabled.others = false;
        }
      }

      if (newPassword.current && newPassword.new && newPassword.confirm) {
        newButtonDisabled.password = false;
      } else {
        newButtonDisabled.password = true;
      }

      return {
        ...newState,
        user: {
          ...newUser,
        },
        buttonDisabled: {
          ...newButtonDisabled,
        },
        password: {
          ...newPassword,
        },
      };
    case actions.NAME_NEW_VALUE:
      return {
        ...newState,
        user: {
          ...newUser,
          name: newState.inputName,
        },
      };

    case actions.NAME_LOADING:
      return {
        ...newState,
        loading: {
          ...newLoading,
          name: !newLoading.name,
        },
      };

    case actions.PASSWORD_LOADING:
      return {
        ...newState,
        loading: {
          ...newLoading,
          password: !newLoading.password,
        },
      };

    case actions.OTHERS_LOADING:
      return {
        ...newState,
        loading: {
          ...newLoading,
          others: !newLoading.others,
        },
      };

    case actions.SET_ERROR:
      switch (action.name) {
        case inputTypes.password:
          newState.passwordStatus = action.status;
          if (action.status === true) {
            newState.password = resetPassword;
          }
          break;
        default:
          break;
      }
      return {
        ...newState,
        error: action.error,
      };

    case actions.SET_PASSWORD_UPDATE_STATUS:
      return {
        ...newState,
        updateStatus: {
          password: !newUpdateStatus.password,
        },
        buttonDisabled: {
          ...newButtonDisabled,
          password: true,
        },
      };

    case actions.CANCEL_UPDATE_STATUS:
      return {
        ...newState,
        updateStatus: {
          password: false,
          others: false,
        },
      };

    case actions.SET_BUTTON_DISABLED:
      return {
        ...newState,
        buttonDisabled: {
          ...newButtonDisabled,
          others: !newButtonDisabled.others,
        },
      };

    default:
      return state;
  }
};

export default Reducer;
