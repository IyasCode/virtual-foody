import * as bev from "../../../Components/Beverages/BeveragesName/BeveragesName";

const state = {
  type: "beverage",
  // Beverages : [ name , price ]
  beverages: [
    [bev.cola, 3.2],
    [bev.fanta, 2.9],
    [bev.chocolate, 4.5],
    [bev.coffee, 4.5],
    [bev.tea, 3.55],
    [bev.greenTea, 3.35],
    [bev.mineralWater, 1.15],
    [bev.bananaMilkshake, 6.4],
    [bev.chocolateMilkshake, 6.4],
    [bev.strawberryMilkshake, 6.4],
  ],
  chosenBeverage: null,
  orderClick: false,
};

export default state;
