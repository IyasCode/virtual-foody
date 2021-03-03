import React, { useState } from "react";

import Aux from "../../hoc/Auxileries";
import RecipeComponent from "../../Components/RecipeComponent/RecipeComponent";

export const RecipesContext = React.createContext();
export const InputContext = React.createContext();

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);

  const onChangeHandler = (event) => {
    const newRecipe = { recipe: recipe.recipe, author: recipe.author };
    switch (event.target.name) {
      case "recipe":
        newRecipe.recipe = event.target.value;
        console.log(newRecipe);
        break;
      case "author":
        newRecipe.author = event.target.value;
        console.log(newRecipe);
        break;
      default:
        break;
    }
    setRecipe(newRecipe);
  };

  const addClickHandler = () => {
    const newRecipes = [...recipes];
    newRecipes.push({ ...recipe });
    setRecipes(newRecipes);
  };

  return (
    <Aux>
      <InputContext.Provider
        value={{
          onChange: onChangeHandler,
          addClicked: addClickHandler,
        }}
      >
        <RecipesContext.Provider value={[...recipes]}>
          <RecipeComponent />
        </RecipesContext.Provider>
      </InputContext.Provider>
    </Aux>
  );
};

export default Recipe;
