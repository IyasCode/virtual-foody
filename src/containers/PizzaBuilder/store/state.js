import * as pizzaIngName from "../../../Components/Pizza/PizzaIngredient/PizzaIngredientsName/PizzaIngredientsName";

const state = {
  type: "pizza",
  name: "",
  pizzaSize: pizzaIngName.medium,

  // Ingredient: [ name , add , price ]
  // Ingredient's price according to size: [ small , medium , large ]
  ingredients: [
    [pizzaIngName.cheezySauce, false, [2.99, 3.99, 4.99]],
    [pizzaIngName.tomatoSauce, false, [0.99, 1.99, 2.99]],
    [pizzaIngName.mushroomSauce, false, [1.99, 2.99, 3.99]],
    [pizzaIngName.doubleLayerCrust, false, [4.0, 5.5, 7.0]],
    [pizzaIngName.pepperoni, false, [2.5, 3.55, 4.69]],
    [pizzaIngName.prawn, false, [4.5, 5.0, 5.7]],
    [pizzaIngName.fish, false, [3.25, 3.85, 4.45]],
    [pizzaIngName.mushroom, false, [1.65, 2.15, 3.0]],
    [pizzaIngName.pineapple, false, [1.89, 2.59, 3.79]],
    [pizzaIngName.tomato, false, [0.59, 0.79, 0.99]],
    [pizzaIngName.onion, false, [0.39, 0.59, 0.79]],
    [pizzaIngName.pepper, false, [0.49, 0.69, 0.89]],
    [pizzaIngName.mint, false, [0.29, 0.39, 0.49]],
    [pizzaIngName.cheeseSprinkle, false, [2.99, 5.99, 7.99]],
  ],
  totalPrice: 0,
  chosenIngredients: [],
  summary: {},
  orderClick: false,
};

export default state;
