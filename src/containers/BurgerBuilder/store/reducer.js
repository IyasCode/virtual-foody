import * as actions from "./actions";

const burgerIngredientsInput = (burgerIngredients, ingredient, action) => {
  const newBurgerIngredient = [...burgerIngredients];

  if (action === actions.ADD_INGREDIENT) {
    newBurgerIngredient.unshift(ingredient);
  } else {
    for (const ing of newBurgerIngredient) {
      if (ing === ingredient) {
        newBurgerIngredient.splice(newBurgerIngredient.indexOf(ing), 1);
        break;
      }
    }
  }

  return newBurgerIngredient;
};

const reducer = (state, action) => {
  const newState = { ...state };
  const newIngredients = { ...state.ingredients };
  const newTotalPrice = state.totalPrice;

  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...newState,
        ingredients: {
          ...newIngredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        burgerIngredients: burgerIngredientsInput(
          state.burgerIngredients,
          action.ingredient,
          action.type
        ),
        totalPrice: newTotalPrice + state.ingredientPrice[action.ingredient],
      };
    case actions.REMOVE_INGREDIENT:
      return {
        ...newState,
        ingredients: {
          ...newIngredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        burgerIngredients: burgerIngredientsInput(
          state.burgerIngredients,
          action.ingredient,
          action.type
        ),
        totalPrice: newTotalPrice - state.ingredientPrice[action.ingredient],
      };
    default:
      return state;
  }
};

export default reducer;
