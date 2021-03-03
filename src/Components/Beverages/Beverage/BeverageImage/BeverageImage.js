import React from "react";

import classes from "./BeverageImage.module.css";
// import colaImg from "../../../../assets/images/beverages/cola.png";
// import fantaImg from "../../../../assets/images/beverages/fanta.png";
// import chocolateImg from "../../../../assets/images/beverages/chocolate.png";
// import coffeeImg from "../../../../assets/images/beverages/coffee.png";
// import teaImg from "../../../../assets/images/beverages/tea.png";
// import greenTeaImg from "../../../../assets/images/beverages/green-tea.png";
// import mineralWaterImg from "../../../../assets/images/beverages/mineral-water.png";
// import bananaMilkshakeImg from "../../../../assets/images/beverages/banana-milkshake.png";
// import chocolateMilkshakeImg from "../../../../assets/images/beverages/chocolate-milkshake.png";
// import strawberryMilkshakeImg from "../../../../assets/images/beverages/strawberry-milkshake.png";
import * as bev from "../../BeveragesName/BeveragesName";

const beverageImage = (props) => {
  let source = null;

  switch (props.name) {
    case bev.cola:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196881436016640/cola.png";
      break;
    case bev.fanta:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196883881689128/fanta.png";
      break;
    case bev.chocolate:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815194479836266527/chocolate.png";
      break;
    case bev.coffee:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196879049588746/coffee.png";
      break;
    case bev.tea:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196890672005120/tea.png";
      break;
    case bev.greenTea:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196885308276746/green-tea.png";
      break;
    case bev.mineralWater:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196887615012864/mineral-water.png";
      break;
    case bev.bananaMilkshake:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196910117584926/banana-milkshake.png";
      break;
    case bev.chocolateMilkshake:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815195669349662730/chocolate-milkshake.png";
      break;
    case bev.strawberryMilkshake:
      source =
        "https://cdn.discordapp.com/attachments/791655883666620426/815196888768708649/strawberry-milkshake.png";
      break;
    default:
      break;
  }

  return (
    <img
      className={classes.BeverageImage}
      src={source}
      alt={props.name}
      title={props.name}
    />
  );
};

export default beverageImage;
