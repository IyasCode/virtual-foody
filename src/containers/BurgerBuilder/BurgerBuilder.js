import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";

import Aux from "../../hoc/Auxileries";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import * as actions from "./store/actions";
import classes from "./BurgerBuilder.module.css";
import reducer from "./store/reducer";
import burgerBuilderState from "./store/state";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import * as globalActions from "../../globalStore/actions/globalActions";
import addOrderToLocalStorage from "../../utilities/localStorage/addOrderToLocalStorage";

export const StateContext = React.createContext();

const BurgerBuilder = (props) => {
  const [orderClick, setOrderClick] = useState(false);
  const [state, dispatch] = useReducer(reducer, burgerBuilderState);
  const auth = useSelector((state) => state.auth);
  const globalDispatch = useDispatch();

  let name = "";

  const onIngredientAdded = (ingredient) =>
    dispatch({
      type: actions.ADD_INGREDIENT,
      ingredient: ingredient,
    });

  const onIngredientRemoved = (ingredient) =>
    dispatch({
      type: actions.REMOVE_INGREDIENT,
      ingredient: ingredient,
    });

  const updatePurchase = () => {
    let sum = Object.values(state.ingredients).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    return sum > 0;
  };

  const orderClickedHandler = () => {
    setOrderClick(true);
  };

  const orderCancelHandler = () => {
    setOrderClick(false);
  };

  const orderContinueHandler = () => {
    const burgerData = {
      type: state.type,
      name: name ? name : state.type,
      ingredients: { ...state.ingredients },
      burgerIngredients: [...state.burgerIngredients],
      totalPrice: state.totalPrice,
    };

    if (auth.id) {
      firebase
        .database()
        .ref("users/" + auth.id + "/orders/")
        .push(burgerData)
        .then(() => globalDispatch(fetchUserData(auth.id)))
        .then(() => globalDispatch({ type: globalActions.LOADING }));
      globalDispatch({ type: globalActions.LOADING });
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    } else {
      addOrderToLocalStorage(burgerData);
      props.history.replace({
        pathname: "/my-order",
      });
      globalDispatch({ type: globalActions.TOOLBAR_RENDER });
    }
  };

  const nameOnChangeHandler = (event) => {
    name = event.target.value;
  };

  const buttonCheck = {
    ...state.ingredients,
  };

  for (const key in buttonCheck) {
    buttonCheck[key] = buttonCheck[key] === 0;
  }

  return (
    <Aux>
      <Modal show={orderClick} backdropClicked={orderCancelHandler}>
        <OrderSummary
          ingredients={state.ingredients}
          cancelClicked={orderCancelHandler}
          continueClicked={orderContinueHandler}
          nameOnChange={nameOnChangeHandler}
          total={state.totalPrice}
        />
      </Modal>
      <div className={classes.BurgerSet}>
        <Burger ingredient={state.burgerIngredients} />
        <BuildControls
          price={state.totalPrice}
          addIngredient={onIngredientAdded}
          removeIngredient={onIngredientRemoved}
          disabled={buttonCheck}
          disabledOrder={updatePurchase()}
          orderClicked={orderClickedHandler}
        />
      </div>
    </Aux>
  );
};

export default BurgerBuilder;

// class BurgerBuilder extends Component {
//   state = {
//     orderClick: false,
//   };

//   updatePurchase = () => {
//     let sum = Object.values(this.props.ingredients).reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );

//     return sum > 0;
//   };

//   orderClickedHandler = () => {
//     if (this.props.id) {
//       //user is authenticated
//       this.setState({ orderClick: true });
//     } else {
//       //redirect to sign-in
//       this.props.history.replace("/sign-in");
//       this.props.toolbarRender();
//     }
//   };

//   orderCancelHandler = () => {
//     this.setState({ orderClick: false });
//   };

//   orderContinueHandler = () => {
//     let newId = "";

//     if (this.props.id) {
//       firebase
//         .database()
//         .ref("users/" + this.props.id + "/orders")
//         .once("value")
//         .then((snapshot) => {
//           if (!snapshot.val()) {
//             newId = 1;
//           } else {
//             const arrayKeys = Object.keys(snapshot.val());
//             newId = Number(arrayKeys[arrayKeys.length - 1]) + 1;
//           }
//         })
//         .then(() => {
//           firebase
//             .database()
//             .ref("users/" + this.props.id + "/orders/" + newId)
//             .set({
//               type: "burger",
//               ingredients: { ...this.props.ingredients },
//               burgerIngredients: [...this.props.burgerIngredients],
//               totalPrice: this.props.totalPrice,
//             });
//         });
//     }
//     this.props.history.replace({
//       pathname: "/my-order",
//     });
//   };

//   render() {
//     const buttonCheck = {
//       ...this.props.ingredients,
//     };

//     for (const key in buttonCheck) {
//       buttonCheck[key] = buttonCheck[key] === 0;
//     }

//     return (
//       <Aux>
//         <Modal
//           show={this.state.orderClick}
//           backdropClicked={this.orderCancelHandler}
//         >
//           <OrderSummary
//             ingredients={this.props.ingredients}
//             cancelClicked={this.orderCancelHandler}
//             continueClicked={this.orderContinueHandler}
//             total={this.props.totalPrice}
//           />
//         </Modal>
//         <div className={classes.BurgerSet}>
//           <Burger ingredient={this.props.burgerIngredients} />
//           <BuildControls
//             price={this.props.totalPrice}
//             addIngredient={this.props.onIngredientAdded}
//             removeIngredient={this.props.onIngredientRemoved}
//             disabled={buttonCheck}
//             disabledOrder={this.updatePurchase()}
//             orderClicked={this.orderClickedHandler}
//             orderInputText={this.props.id ? "Order now" : "Sign-in to order"}
//           />
//         </div>
//       </Aux>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ingredients: state.red.ingredients,
//     burgerIngredients: state.red.burgerIngredients,
//     totalPrice: state.red.totalPrice,
//     orderAvailablelity: state.red.orderAvailablelity,
//     id: state.auth.id,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIngredientAdded: (ingredient) =>
//       dispatch({
//         type: actions.ADD_INGREDIENT,
//         ingredient: ingredient,
//       }),
//     onIngredientRemoved: (ingredient) =>
//       dispatch({
//         type: actions.REMOVE_INGREDIENT,
//         ingredient: ingredient,
//       }),
//     toolbarRender: () => dispatch({ type: "TOOLBAR_RENDER" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
