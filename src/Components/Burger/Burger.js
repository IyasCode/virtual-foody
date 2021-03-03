import React from "react";
import BurgerIngredient from "./burgerIngrerdient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  let gridRows = "30%";
  let breadBottomStyle = {};

  let burgerStyle = {
    gridTemplateRows: gridRows,
  };

  if (props.ingredient.length) {
    const gridCount = [24];
    let ingredientCount = 0;

    for (let ingredient of props.ingredient) {
      ingredientCount += 1;
      let countPush = 3;

      if (
        "meat" !== props.ingredient[0] &&
        "meat" !== props.ingredient[props.ingredient.length - 1]
      ) {
        breadBottomStyle = {
          gridRow: "-2",
        };
        gridCount[0] = 20;
      }
      if (
        "meat" === ingredient &&
        props.ingredient.length !== 1 &&
        props.ingredient[props.ingredient.length - 1] !== "meat"
      ) {
        breadBottomStyle = {
          gridRow: "-2",
        };
        gridCount[0] = 24;
        countPush = 12;
      }
      if ("meat" !== props.ingredient[props.ingredient.length - 1]) {
        breadBottomStyle = {
          gridRow: "-3",
        };
      }
      if (
        "meat" === props.ingredient[props.ingredient.length - 1] &&
        "meat" === ingredient &&
        props.ingredient.length !== 1
      ) {
        countPush = 12;
      }
      if (ingredient === "salad" || ingredient === "bacon") {
        countPush = 5;
      }

      if ("tomato" === ingredient && "tomato" === props.ingredient[0]) {
        gridCount[0] = 24;
        countPush = 6;
      }

      gridCount.push(countPush);

      if (ingredientCount === props.ingredient.length) {
        gridCount.push(1);
        gridCount[props.ingredient.length] = 3;
      }
    }

    if ("tomato" === props.ingredient[0]) {
      gridCount[0] = 24;
    }

    gridRows = gridCount.join("% ") + "%";
    burgerStyle = {
      gridTemplateRows: gridRows,
    };
  }

  let transformIngredient = props.ingredient.map((igKey, i) => {
    return (
      <BurgerIngredient
        key={igKey + i}
        type={igKey}
        style={{ zIndex: "-" + i }}
      />
    );
  });

  // if (transformIngredient.length === 0) {
  //   transformIngredient = (
  //     <p style={{ gridColumn: "3/-3" }}>Add new Ingredient</p>
  //   );
  // }

  if (props.style) {
    burgerStyle = { ...burgerStyle, ...props.style };
  }

  return (
    <div className={classes.Burger} style={burgerStyle}>
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      <BurgerIngredient type="bread-bottom" style={breadBottomStyle} />
    </div>
  );
};

export default burger;
