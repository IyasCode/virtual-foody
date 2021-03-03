import React from "react";

import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";
// import breadTopPicture from "../../../assets/images/burgerIngredients/top-bun.png";
// import breadBottomPicture from "../../../assets/images/burgerIngredients/bottom-bun.png";
// import saladPicture from "../../../assets/images/burgerIngredients/salad.png";
// import tomato2Picture from "../../../assets/images/burgerIngredients/tomato2.png";
// import cheesePicture from "../../../assets/images/burgerIngredients/cheese.png";
// import baconPicture from "../../../assets/images/burgerIngredients/bacon.png";
// import meatPicture from "../../../assets/images/burgerIngredients/meat.png";
import * as ingName from "./BurgerIngredientsName/BurgerIngredientsName";

const burgerIngredient = (props) => {
  let ingredient = null;
  const B = classes.BreadTop + " " + classes.BreadTop2;

  switch (props.type) {
    case ingName.breadBottom:
      return (ingredient = (
        <img
          className={classes.BreadBottom}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213473536409630/bread-bottom.png"
          }
          alt="bread bottom"
        />
      ));
    case ingName.breadTop:
      return (ingredient = (
        <img
          className={B}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213477684969522/bread-top.png"
          }
          alt="bread top"
        />
      ));
    case ingName.meat:
      return (ingredient = (
        <img
          className={classes.Meat}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213479757479956/meat.png"
          }
          alt="meat"
        />
      ));
    case ingName.cheese:
      return (ingredient = (
        <img
          className={classes.Cheese1}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213478020775966/cheese.png"
          }
          alt="cheese"
        />
      ));
    case ingName.salad:
      return (ingredient = (
        <img
          className={classes.Salad}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213481317498890/salad.png"
          }
          alt="salad"
        />
      ));
    case ingName.tomato:
      return (ingredient = (
        <img
          className={classes.Tomato}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213484534792212/tomato.png"
          }
          alt="tomato"
        />
      ));
    case ingName.bacon:
      return (ingredient = (
        <img
          className={classes.Bacon}
          style={props.style}
          src={
            "https://cdn.discordapp.com/attachments/791655883666620426/815213473658830888/bacon.png"
          }
          alt="bacon"
        />
      ));
    default:
      return ingredient;
  }
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
