const state = {
  type: "burger",
  name: "",
  ingredients: {
    salad: 0,
    tomato: 0,
    meat: 0,
    bacon: 0,
    cheese: 0,
  },
  ingredientPrice: {
    salad: 0.2,
    tomato: 0.5,
    meat: 1.5,
    bacon: 0.99,
    cheese: 0.7,
  },
  burgerIngredients: [],
  totalPrice: 0.4,
};

export default state;
