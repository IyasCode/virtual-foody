import * as actions from "./actions";
import * as pizzaIngName from "../../../Components/Pizza/PizzaIngredient/PizzaIngredientsName/PizzaIngredientsName";

const reducer = (state, action) => {
  const name = 0;
  const add = 1;
  const price = 2;

  const newState = { ...state };
  const newIngredients = JSON.parse(JSON.stringify(state.ingredients));
  let newPizzaSize = state.pizzaSize;
  let newTotalPrice = state.totalPrice;

  let ingredientIndex;

  let pizzaSizeIndex;
  switch (state.pizzaSize) {
    case pizzaIngName.small:
      pizzaSizeIndex = 0;
      break;
    case pizzaIngName.medium:
      pizzaSizeIndex = 1;
      break;
    case pizzaIngName.large:
      pizzaSizeIndex = 2;
      break;
    default:
      break;
  }

  newIngredients.map((ingKey, index) => {
    if (ingKey[0] === action.ingredient) {
      return (ingredientIndex = index);
    }
    return null;
  });

  switch (action.type) {
    case actions.ADD_UP:
      newIngredients[ingredientIndex][add] = true;
      const total =
        newTotalPrice + newIngredients[ingredientIndex][price][pizzaSizeIndex];

      return {
        ...newState,
        totalPrice: total,
        ingredients: [...newIngredients],
      };
    case actions.TAKE_AWAY:
      newIngredients[ingredientIndex][add] = false;

      return {
        ...newState,
        totalPrice:
          newTotalPrice -
          newIngredients[ingredientIndex][price][pizzaSizeIndex],
        ingredients: [...newIngredients],
      };
    case actions.CHOICE:
      const cheeseSauceIndex = 0;
      const tomatoSauceIndex = 1;
      const mushroomSauceIndex = 2;

      if (newIngredients[ingredientIndex] != null) {
        if (newIngredients[ingredientIndex][add]) {
          newTotalPrice -=
            newIngredients[ingredientIndex][price][pizzaSizeIndex];
        } else {
          newTotalPrice +=
            newIngredients[ingredientIndex][price][pizzaSizeIndex];
        }

        newIngredients[ingredientIndex][add] = !newIngredients[ingredientIndex][
          add
        ];

        switch (newIngredients[ingredientIndex][name]) {
          case pizzaIngName.cheezySauce:
            if (newIngredients[tomatoSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[tomatoSauceIndex][price][pizzaSizeIndex];
              newIngredients[tomatoSauceIndex][add] = false;
            }
            if (newIngredients[mushroomSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[mushroomSauceIndex][price][pizzaSizeIndex];
              newIngredients[mushroomSauceIndex][add] = false;
            }
            break;
          case pizzaIngName.tomatoSauce:
            if (newIngredients[cheeseSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[cheeseSauceIndex][price][pizzaSizeIndex];
              newIngredients[cheeseSauceIndex][add] = false;
            }
            if (newIngredients[mushroomSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[mushroomSauceIndex][price][pizzaSizeIndex];
              newIngredients[mushroomSauceIndex][add] = false;
            }
            break;
          case pizzaIngName.mushroomSauce:
            if (newIngredients[cheeseSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[cheeseSauceIndex][price][pizzaSizeIndex];
              newIngredients[cheeseSauceIndex][add] = false;
            }
            if (newIngredients[tomatoSauceIndex][add]) {
              newTotalPrice -=
                newIngredients[tomatoSauceIndex][price][pizzaSizeIndex];
              newIngredients[tomatoSauceIndex][add] = false;
            }
            break;
          default:
            break;
        }
      } else {
        let totalPrice = 0;

        switch (action.ingredient) {
          case pizzaIngName.small:
            newPizzaSize = pizzaIngName.small;
            pizzaSizeIndex = 0;
            break;
          case pizzaIngName.medium:
            newPizzaSize = pizzaIngName.medium;
            pizzaSizeIndex = 1;
            break;
          case pizzaIngName.large:
            newPizzaSize = pizzaIngName.large;
            pizzaSizeIndex = 2;
            break;
          default:
            break;
        }

        // newIngredients.map((ingKey) => {
        //   // check if the ingredient is true then total all the true ingredient with the new value.
        //   if (ingKey[1]) {
        //     totalPrice += ingKey[2][pizzaSizeIndex];
        //   }
        // });

        for (let ingredient of newIngredients) {
          // check if the ingredient is true then total all the true ingredient with the new value.
          if (ingredient[1]) {
            totalPrice += ingredient[2][pizzaSizeIndex];
          }
        }

        newTotalPrice = totalPrice;
      }

      return {
        ...newState,
        pizzaSize: newPizzaSize,
        totalPrice: newTotalPrice,
        ingredients: [...newIngredients],
      };

    case actions.ORDER:
      const newChosenIngredients = [];
      const newSummary = {
        size: newState.pizzaSize,
        sauce: "",
        ingredients: [],
      };

      for (let ingredient of newState.ingredients) {
        if (ingredient[add]) {
          newChosenIngredients.push(ingredient[name]);
          if (
            ingredient[name] !== pizzaIngName.cheezySauce &&
            ingredient[name] !== pizzaIngName.tomatoSauce &&
            ingredient[name] !== pizzaIngName.mushroomSauce
          ) {
            newSummary.ingredients.push(ingredient[name]);
          }
        }
      }

      if (newChosenIngredients.indexOf(pizzaIngName.cheezySauce) > -1) {
        newSummary.sauce = "cheese";
      } else if (newChosenIngredients.indexOf(pizzaIngName.tomatoSauce) > -1) {
        newSummary.sauce = "tomato";
      } else if (
        newChosenIngredients.indexOf(pizzaIngName.mushroomSauce) > -1
      ) {
        newSummary.sauce = "mushroom";
      } else {
        newSummary.sauce = "none";
      }

      return {
        ...newState,
        chosenIngredients: newChosenIngredients,
        summary: { ...newSummary },
        orderClick: !state.orderClick,
      };

    case actions.NAME_ON_CHANGE:
      const newName = action.value;

      console.log(newName);
      return {
        ...newState,
        name: newName,
      };

    default:
      return state;
  }
};

export default reducer;
