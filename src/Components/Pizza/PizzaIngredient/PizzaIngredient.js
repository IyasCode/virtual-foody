import React from "react";

import classes from "./PizzaIngredient.module.css";
import * as pizzaIngName from "./PizzaIngredientsName/PizzaIngredientsName";
// import plainPizzaImg from "../../../assets/images/pizzaIngredients/plain-pizza.png";
// import cheezySauceImg from "../../../assets/images/pizzaIngredients/cheezy-sauce.png";
// import tomatoSauceImg from "../../../assets/images/pizzaIngredients/tomato-sauce.png";
// import mushroomSauceImg from "../../../assets/images/pizzaIngredients/mushroom-sauce.png";
// import doubleLayerCrustImg from "../../../assets/images/pizzaIngredients/double-layer-cheese-crust.png";
// import pepperoniImg from "../../../assets/images/pizzaIngredients/pepperoni.png";
// import prawnImg from "../../../assets/images/pizzaIngredients/prawn.png";
// import fishImg from "../../../assets/images/pizzaIngredients/fish.png";
// import mushroomImg from "../../../assets/images/pizzaIngredients/mushroom.png";
// import pineappleImg from "../../../assets/images/pizzaIngredients/pineapple.png";
// import tomatoImg from "../../../assets/images/pizzaIngredients/tomato.png";
// import onionImg from "../../../assets/images/pizzaIngredients/onion.png";
// import pepperImg from "../../../assets/images/pizzaIngredients/pepper.png";
// import mintImg from "../../../assets/images/pizzaIngredients/mint.png";
// import cheeseSprinkleImg from "../../../assets/images/pizzaIngredients/cheese-sprinkle.png";

const pizzaIngredient = (props) => {
  let ingredient;

  switch (props.type) {
    case pizzaIngName.plainPizza:
      return (ingredient = (
        <img
          className={classes.PlainPizza}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815217106806112266/plain-pizza.png"
          }
          alt="pizza plain"
        />
      ));
    case pizzaIngName.cheezySauce:
      return (ingredient = (
        <img
          className={classes.CheezySauce}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216985188859934/cheezy-sauce.png"
          }
          alt="cheese sauce"
        />
      ));
    case pizzaIngName.tomatoSauce:
      return (ingredient = (
        <img
          className={classes.TomatoSauce}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815217410763128832/tomato-sauce.png"
          }
          alt="tomato sauce"
        />
      ));
    case pizzaIngName.mushroomSauce:
      return (ingredient = (
        <img
          className={classes.MushroomSauce}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216992188497940/mushroom-sauce.png"
          }
          alt="mushroom sauce"
        />
      ));
    case pizzaIngName.doubleLayerCrust:
      return (ingredient = (
        <img
          className={classes.DoubleLayerCrust}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216988338520124/double-layer-cheese-crust.png"
          }
          alt="double layer crust"
        />
      ));
    case pizzaIngName.pepperoni:
      return (ingredient = (
        <img
          className={classes.Pepperoni}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216998363299850/pepperoni.png"
          }
          alt="pepperoni"
        />
      ));
    case pizzaIngName.prawn:
      return (ingredient = (
        <img
          className={classes.Prawn}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815217712811868160/prawn.png"
          }
          alt="prawn"
        />
      ));
    case pizzaIngName.fish:
      return (ingredient = (
        <img
          className={classes.Fish}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216987890384936/fish.png"
          }
          alt="fish"
        />
      ));
    case pizzaIngName.mushroom:
      return (ingredient = (
        <img
          className={classes.Mushroom}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216991496699934/mushroom.png"
          }
          alt="mushroom"
        />
      ));
    case pizzaIngName.pineapple:
      return (ingredient = (
        <img
          className={classes.Pineapple}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815217893141905458/pineapple.png"
          }
          alt="pineapple"
        />
      ));
    case pizzaIngName.tomato:
      return (ingredient = (
        <img
          className={classes.Tomato}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815217151086559283/tomato.png"
          }
          alt="tomato"
        />
      ));
    case pizzaIngName.onion:
      return (ingredient = (
        <img
          className={classes.Onion}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216993527529522/onion.png"
          }
          alt="onion"
        />
      ));
    case pizzaIngName.pepper:
      return (ingredient = (
        <img
          className={classes.Pepper}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216995900719144/pepper.png"
          }
          alt="pepper"
        />
      ));
    case pizzaIngName.mint:
      return (ingredient = (
        <img
          className={classes.Mint}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216989717921802/mint.png"
          }
          alt="mint"
        />
      ));
    case pizzaIngName.cheeseSprinkle:
      return (ingredient = (
        <img
          className={classes.CheeseSprinkle}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815216982806495232/cheese-sprinkle.png"
          }
          alt="cheese sprinkle"
        />
      ));
    default:
      return ingredient;
  }
};

export default pizzaIngredient;
